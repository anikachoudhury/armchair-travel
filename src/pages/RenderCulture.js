import React, { Component } from 'react';
import axios from 'axios';

export class RenderCulture extends Component {
    render() {

        
        const { values } = this.props;
        const apiKey = "AIzaSyAwK28b1YX0bXIjMEHo--n_to_1V52JV6s";
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=love&langRestrict=fr&key=${apiKey}`)
        .then(data => {
            console.log(data);
        })
        
        return (
            <div>
                
            </div>
        )
    }
}

export default RenderCulture;
