import React from "react";
import { Component } from "react";
import {motion} from 'framer-motion';
import MusicSearchArea from "./MusicSearchArea";
import MusicList from "./musicList2";
import './MusicContainer.css';

import pageVariants from './../Components/pageVariants';
import pageTransition from './../Components/pageTransition';

//Get new userAccessToken from https://developer.spotify.com/console/get-featured-playlists/?country=&locale=&timestamp=&limit=&offset=

class MusicContainer extends Component {
    constructor() {
        super()
        this.state = {
            music: [],
            countryCode: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const endpoint = "https://api.spotify.com/v1/browse/featured-playlists";
        const limit = 15;
        const userAccessToken = 'BQA0jy8bEZrmno1kFmJyBe1ZvOws1K_i2ktXg1ass9vtSPsnU92G3UkF22pEq98MbNMCJiAULpxElvZ1p7stMwo9uGwY6QPCTEJf4gxbBbreuEcLCEsoDQ2PQNKYMrUaIt9CIlnVRt3qctk';

        fetch(
            `${endpoint}?country=${this.state.countryCode}&limit=${limit}`, {
            method:"GET",
            headers:{
            Authorization:`Bearer ${userAccessToken}`
            }
        })
        .then(data => data.json())
        .then(({playlists}) => {
            console.log(playlists);
            this.setState({
                music: [...playlists.items]
            })
            console.log(this.state.music);
        })
    }

    handleChange = (e) => {
        this.setState({countryCode: e.target.value})
    }
    
    render() {
        return (
            <motion.div className="music"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}>

            <div className="musicHeader">
            <img src='./images/musicHeader.png' width="900" alt="Music Header"/>
            </div>

                <MusicSearchArea handleSubmit ={this.handleSubmit} handleChange={this.handleChange} />
                <MusicList music={this.state.music} />
            </motion.div>

        )
    }
}
export default MusicContainer;