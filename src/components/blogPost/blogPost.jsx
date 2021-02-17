import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./blogPost.css"
class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const post = this.props.post
        return (
            <Link to={`/blog/${post.id}`} style={{textDecoration:'none', color:'inherit'}}>

            <div className="blogPost m-2" style={this.props.count%2?color1:color2}>
                <div className="pb-2 postDate" style={this.props.count%2?bgColor1:bgColor2}>{post.postDate}</div>
                <div className="p-2 postHeader" style={{fontWeight:'bold', textTransform: 'capitalize'}}>{post.header}</div>
                <div className="p-2 postDesc" style={{fontStyle: 'italic'}}>{post.description}</div>
                <div className="postPictures">{post.pictures.map(img =>
                    <img className="p-2" src={img} key={Math.random()} style={{height:"15vh"}}/>
                )}</div>
            </div>
            </Link> 
         );
    }
}
const color1 = {
    border: "solid 8px rgb(255, 136, 0)",
    borderRadius: "10px"
}
const bgColor1 ={
    backgroundColor: 'rgb(255, 136, 0)', color:'white', fontSize:'12px'
} 
const color2 = {
    border: "solid 8px rgb(172, 18, 18)",
    borderRadius: "10px"
} 
const bgColor2 ={
    backgroundColor: 'rgb(172, 18, 18)', color:'white', fontSize:'12px'
} 
export default BlogPost;