import axios from "axios";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import React, { Component } from "react";
import { Line } from '@reactchartjs/react-chart.js'
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newOrders: 0,
      loaded: false,
      totalOpenOrders: 0,
      newUsers: 0,
      totalForMonth: 0,
      data: null,
      token: `bearer ${localStorage.getItem("home-food-AT")}`
    };
  }
  componentDidMount() {
    this.loadNewOrders();
    this.loadData();
  }
  loadNewOrders() {

    axios
      .get(
        `${process.env.REACT_APP_SERVER_ADDRESS}/orders?filter={"status":"unconfirmed"}&range=[0,9]&sort=["id","ASC"]`,
        { headers: { authorization: this.state.token } }
        )      
      .then((resp) => {
        this.setState({
          newOrders: resp.headers[Object.keys(resp.headers)[1]],
        });
      });
  }
  async loadData() {
    await axios
      .get(`${process.env.REACT_APP_SERVER_ADDRESS}/orderstatus`, { headers: { authorization: this.state.token } })
      .then((resp) => {
        let statuses = [];

        statuses = resp.data.map((s) => s.name);

        this.loadOpenOrders(statuses);
        this.loadMonthlyData(statuses);
      });
  }
  loadOpenOrders(statuses) {
    let filtredStatuses = statuses;
    filtredStatuses = filtredStatuses.filter((s) => {
      if (s !== "Closed" && s !== "Unconfirmed" && s !== "Rejected") return s;
    });

    axios
      .get(
        `${
          process.env.REACT_APP_SERVER_ADDRESS
        }/orders?filter={"status":${JSON.stringify(
          filtredStatuses
        )}}&range=[0,9]&sort=["id","ASC"]`,
        { headers: { authorization: this.state.token } }
      )
      .then((resp) => {
        this.setState({
          totalOpenOrders: resp.headers[Object.keys(resp.headers)[1]],
        });
      });
  }
  loadMonthlyData(statuses) {
    let filtredStatuses = statuses;
    let totalForMonth = 0;
    // filtredStatuses = filtredStatuses.filter((s) => {
    //   if (
    //     s !== "Unconfirmed" &&
    //     s !== "Rejected"
    //   )
    //     return s
    // });
    let lastMonthDates = [];
    let lastMonthTotals = [];
    let lastMonthOrders = [];
    const today = Date.now();
    for (let i = 0; i < 30; i++) {
      let theDate = new Date(today - 1000 * 60 * 60 * 24 * i);
      lastMonthTotals.push(0);
      lastMonthDates.push(this.parseDateToString(theDate));
    }
    axios
      .get(
        `${
          process.env.REACT_APP_SERVER_ADDRESS
        }/orders?filter={"status":${JSON.stringify(
          filtredStatuses
        )}}&range=[0,9]&sort=["id","ASC"]`,
        { headers: { authorization: this.state.token } }
      )
      .then((resp) => {
        resp.data.forEach((order) => {
          if (
            new Date() - new Date(JSON.parse(order.orderDate)) <
            1000 * 60 * 60 * 24 * 30
          ) {
            lastMonthOrders.push(order);
            totalForMonth += order.totalSum;
          }
        });

        lastMonthOrders.forEach((o) => {
          let theDate = new Date(JSON.parse(o.orderDate));
          let index = lastMonthDates.indexOf(this.parseDateToString(theDate));
          if (index >= 0) lastMonthTotals[index] += o.totalSum;
        });
        const data = {
            labels: lastMonthDates,
            datasets: [
              {
                label: "Last month orders",
                fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
                data: lastMonthTotals,
              },
            ],
          };
        this.setState({
          totalForMonth, data
        });
      });
  }
  parseDateToString(theDate) {
    return `${
      theDate.getMonth() + 1
    }/${theDate.getDate()}/${theDate.getFullYear()}`;
  }

  render() {
      
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      };
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              }
              
            },
            
          ],
          
        },
        
      }
    return (
        

      <div className="d-flex justify-content-center flex-wrap">
        <Card id="newOrders" onClick={()=>{
            this.props.history.push('/orders')
        }}>
          <CardHeader title="New Orders" />
          <CardContent>{this.state.newOrders}</CardContent>
        </Card>
        <Card>
          <CardHeader title="Number of open orders" />
          <CardContent>{this.state.totalOpenOrders}</CardContent>
        </Card>
        <Card>
          <CardHeader title="Monthly turnover of funds" />
          <CardContent>{this.state.totalForMonth}</CardContent>
        </Card>
        <Card>
          <CardHeader title="New tickets" />
          <CardContent>Lorem ipsum sic dolor amet...</CardContent>
        </Card>
        {this.state.data ?<Line data={this.state.data} options={options}/>:null}
        
      </div>
      
    );
  }
}
