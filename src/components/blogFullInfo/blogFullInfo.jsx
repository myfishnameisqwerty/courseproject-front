import React, { Component } from 'react';
class BlogFullInfo extends Component {
    constructor(props) {
        super(props);
        // this.state = {  }
    }
    render() { 
        console.log('match: ',this.props.match.params.id)
        return ( 
            <div>
                <h1>11</h1>
            </div>
            
         );
    }
    
}
 
export default BlogFullInfo;