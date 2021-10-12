import React from "react";
import { Component } from "react";
import MusicSearchArea from "./MusicSearchArea";
import MusicList from "./musicList2";
import './MusicContainer.css';

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
        const userAccessToken = 'BQDQk9DXvAvCzpnR_j4yvK6dckjnvyGYscCU9l49RlIckUhNjLx15KsX20Tg0w5oXMsn7YznSgL_hsnT851_SR64Jsppg6QwfjJGDPvLSOvb2GrR9fUsTqA5YkupC2_7W1Mpl3uDD10';

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
            <div className="music">
                <MusicSearchArea handleSubmit ={this.handleSubmit} handleChange={this.handleChange} />
                <p>Search for the most popular playlists from around the globe, simply type in the country code!</p>
                <MusicList music={this.state.music} />
            </div>

        )
    }
}
export default MusicContainer;