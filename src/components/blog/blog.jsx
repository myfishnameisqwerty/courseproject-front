import axios from 'axios';
import React, { Component } from 'react';
import BlogPost from '../blogPost/blogPost';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            posts: []
         }
    }
    loadPosts(){
        axios.get('http://localhost:3000/blogposts').then(res => {
            const posts = res.data
            this.setState({posts})
        })
    }
    componentDidMount(){
        this.loadPosts()
    }
    render() { 
        return ( 
        <div className="blog">
            {this.state.posts.map((post, i) => 
               <BlogPost key={Math.random()} post={post} count={i}/>)}
            
        </div> );
    }
}
 
export default Blog;