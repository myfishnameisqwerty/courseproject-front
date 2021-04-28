import firebase, { auth, db } from "./firebase";
import axios from "axios"
import { connect } from "react-redux";
import { updateUserNavbar } from "./actions/actions";

// import  { auth } from "./firebase"
class Auth {
  constructor(){
     this.user = null
  }

  async login(email, password) {
    let result = [];
    const request = {email, password}
    await axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/users/login`, request)
    .then( async resp => {
      if (resp.data.token){
        localStorage.setItem("home-food-AT", resp.data.token)

        await this.onSuccessLogin(result)
        
      }
      else  this.onFailedLogin(result, resp.data)
    })
    return result
  }
  onFailedLogin(result, e) {
    
    result.push(false, e.message);
  }

  async onSuccessLogin(result) {
    let promise = await new Promise( async (resolve, reject) => {
      this.loadUserData().then(res => {
        result.push(true, `Hello ${res.username}`)
        resolve(result)
      })
    })
    return promise

  }
  async loadUserData() {
    let promise = new Promise( async (resolve, reject) => {
      let authorization = `bearer ${localStorage.getItem("home-food-AT")}`
      await axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/users/token`, { headers: { authorization } })
        .then(resp => {
          this.user = resp.data
        });
      resolve(this.user)

    })
    return promise
  }

  //  googleLogin(){
  //     let result = []
  //     const provider = new firebase.auth.GoogleAuthProvider()
  //     provider.setCustomParameters({prompt: 'select_account'})
  //      auth.signInWithPopup(provider)
  //     .then(() => {
  //       this.onSuccessLogin(result);
  //     }).catch(e => this.onFailedLogin(result, e))
  //   }
  async signup(email, password, username) {
    let result = [];
    await axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/users`, {email, password, username})
    .then(resp =>{
      if (resp.data.token){
        localStorage.setItem("home-food-AT", resp.data.token)
        this.onSuccessLogin(result);
      }
      else    result.push(false,  resp.data.message)
    })
    return result;
    
  }
  async logout() {
    localStorage.removeItem('home-food-AT')
  }

  isAuthenticated() {
    if (this.user) return true;
    else return false;
  }

  addOrder(resp, customer, address, orderDate, totalSum){
    let allOrders = JSON.parse(localStorage.getItem("homefood-ordersInProcess"));
    const selectedOrdersIndexes = JSON.parse(localStorage.getItem("homefood-selectedOrdersIndexes"));
    let payedOrders = []
    selectedOrdersIndexes.map(i => ( payedOrders.push(allOrders.splice(i,1))));
    localStorage.setItem("homefood-selectedOrdersIndexes", JSON.stringify([]))
    localStorage.setItem("homefood-selectedTotal", 0)
    localStorage.setItem("homefood-ordersInProcess", JSON.stringify(allOrders))
    
    payedOrders.forEach(el => {
      let order = el[0].orderInfo;
      const {orderId, ...rest} = order;
      order = {
        id: orderId,
        orderInfo : rest,
        user:this.isAuthenticated()?this.user.id:"anonymous",
        orderDate:JSON.stringify(orderDate),
        customer,
        address:address?address:"pick up",
        totalSum,
        paymentComfirmation: resp
      }
      console.log("order is", order);
      axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/orders`, order)
      
    });
    
  }
}
const mapStateToProps = state => ({
  userName: state.global.userName,
  userRole: state.global.userRole
})
// export default connect(mapStateToProps, {updateUserNavbar}) (Auth);
export default new Auth()
