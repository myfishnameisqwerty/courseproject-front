import axios from 'axios';
import React, { Component } from 'react';
import './about.css'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = { pictures:[] }
    }
    render() { 
        const pictures = this.state.pictures
        return ( 
            <div className='center'>
                <div>
                    <h4>Why homefood is better then a restoran food?</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto consequatur modi commodi numquam illo cum rem eius molestiae provident optio hic saepe maiores, animi cumque nihil iure repellendus accusantium impedit!
                    Error laborum nobis, beatae odio porro praesentium doloribus fuga velit. Voluptatum unde laboriosam maiores obcaecati nostrum vel tempore tenetur libero. Asperiores nemo natus mollitia praesentium accusantium illo assumenda sint alias!
                    Asperiores quisquam qui distinctio cupiditate necessitatibus. Natus eveniet, sint vel dolorem a, rerum beatae numquam odit ipsa velit id excepturi impedit tenetur dolores blanditiis eos neque sed exercitationem error dolore!</p>
                </div>
                <div className='aboutPictures d-flex flex-wrap justify-content-around'>
                    {pictures.map(pic => <img className="p-2" src={pic} key={Math.random()} style={{height:"15vh"}}/>)}
                </div>
                <iframe 
src="https://www.youtube.com/embed/boTfxLdDv9I" style={{height:'360px', width:'780px', margin:'auto'}}>
</iframe>
            </div>
         );
    }
    componentDidMount(){
        this.loadPictures()
    }
    loadPictures(){
        axios.get('aboutPictures.json').then(res => {
            const pictures = res.data
            this.setState({pictures})
        })
    }
}
 
export default About;