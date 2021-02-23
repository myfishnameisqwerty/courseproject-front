import axios from 'axios';
import React, { Component } from 'react';
import Carousel from "../Carousel/Carousel";
import ModalLogin from "../modalLogin/login";
import "./blogFullInfo.css"
class BlogFullInfo extends Component {
    constructor(props) {
        super(props);
        this.state={post:{}}
    }
    render() { 
        const post = this.state.post
        if (typeof post.pictures ==='undefined')
            return <span>Loading...</span>
        else
        return ( 
            <div className="text-center">

            <div className="blogFullInfo mt-5 ">
                <span>Posted on {post.postDate}</span>
                <h1>{post.header}</h1>
                <Carousel pictures={this.state.post.pictures}/>
                <p className="mt-3">{post.description}</p>
            </div>
            <div><textarea ref={area=>this.area = area} name="coment" id="coment" cols="150" rows="10"></textarea>
                <br/><button onClick={()=>this.onSubmit()} className="btn btn-danger" style={{color: 'white',
    backgroundColor: 'rgb(226, 80, 31)'}}>Comment</button>
            </div>
            <div className="mt-5 container">
                <p>Comments</p>
                
                {post.comments.map( (com, i) => {
                    return (<div className="comment mt-5 mb-5" key={Date.now()*Math.random()} style={i%2?borderStyle1:borderStyle2}>
                        <p className="" key={Date.now()*Math.random()} style={i%2?borderBottomstyle1:borderBottomstyle2}>{`by ${com.name} at ${com.date}`}</p>
                        <p className="" key={Date.now()*Math.random()}>{com.comment}</p>
                        <div style={i%2?borderTopstyle1:borderTopstyle2 }>
                        <div style={{color:i%2?color1:color2}}>

                        <i className="fas fa-thumbs-up" onClick={()=> this.onSendLike(1, com.id)}> {com.likes}</i>
                        <i className="ml-5 fas fa-thumbs-down" onClick={()=> this.onSendLike(-1, com.id)}> {com.dislikes}</i>
                        </div>
                        </div>
                    </div>)
                })}
            </div>
            </div>
            
         );
    }
    onSubmit(){
        
        if (this.isLogedIn()){
            
            if (this.area.value)
                this.submitComent()
        }
        else
            <ModalLogin/>

        
    }
    isLogedIn(){
        return false
    }
    submitComent(){

    }
    onSendLike(like, id){
        //check if liked
        //update likes
    }
    componentDidMount(){
        this.loadData()
    }
    loadData(){
        // request data for this.props.match.params.id
        axios.get("http://localhost:3000/blogitem").then(res => {
            const post = res.data
            this.setState({post})
        })
    }
    
}
const color1 = 'rgb(172, 18, 18)'
const color2 = 'rgb(255, 136, 0)'
const borderStyle1 = {
    border: `solid 2px ${color1}`, borderRadius: '20px',
} 
const borderStyle2 = {
    border: `solid 2px ${color2}`, borderRadius: '20px',
} 
const borderBottomstyle1 ={
    borderBottom: `solid 2px ${color1}`
}
const borderBottomstyle2 ={
    borderBottom:`solid 2px ${color2}`
}
const borderTopstyle1 ={
    borderTop: `solid 2px ${color1}`
}
const borderTopstyle2 ={
    borderTop: `solid 2px ${color2}`
}
export default BlogFullInfo;