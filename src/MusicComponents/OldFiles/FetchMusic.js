/* TO DO:
1. Load in spotify api (DONE)
2. Filter for country (DONE)
3. Load correct images
4. Apply CSS
*/
// import React from "react";
// import { Component } from "react";
// import SearchArea from "./SearchArea";
// import Nav from "./nav";
// import MusicList from "./musicList";

// class FetchMusic extends Component {
//     constructor() {
//         super()
//         this.state = {
//             music: [],
//             countryCode: ''
//         }
//         // this.endpoint = "https://api.spotify.com/v1/browse/featured-playlists",
//         // this.limit = 10,
//         // this.userAccessToken = 'BQBliCmwc-n4dHXsnFg3qYRRuQh5J9KwAXWt8AuixIYD1YzkCST8aIiGEvuix53ZYQXg21f30gS4cLF1vS7H5OtCKWV3TFNA7snTD1jBGe1KyisL9czXnVyIYlPC3Q8YD6BvJ-YXVJY'
//     }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     const userAccessToken = 'BQAO_UMlHrA1Wvm51Dcj2rtxJVdBHbja-L_ItTKYr5AnX6SwRX9lvVeqg2YtMB54XfsZ15wEFI6ggD6uCtGoU3CFo2c_IDeSgbwoFlwaZeYllO-gnOvqWiFqMtRBdNa2d_lanCnFmLg'

    //     fetch(`https://api.spotify.com/v1/browse/featured-playlists?country=${this.state.countryCode}&limit=10`, {
    //         method:"GET",
    //         headers:{
    //             Authorization:`Bearer ${userAccessToken}`
    //         }
    //     })
    //     .then(data => data.json())
    //     .then(({playlists}) => {
    //         console.log(playlists);
    //         this.setState({
    //             music: [...playlists.items]
    //         })
    //         console.log(this.state.music);
    //     })
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault();

    //     const endpoint = "https://api.spotify.com/v1/recommendations";
    //     const artists = '6sFIWsNpZYqfjUpaCgueju';
    //     const danceability = encodeURIComponent('0.9');
    //     const userAccessToken = 'BQCi_YSnSHg0UFrKUU4nZKPr1NCE3mfb7s1EuhhkKBkCx_FJ5dYZ7NMx3LT0WVoRcSY9wMx1W0op_IvKCySqRLOh-ByC_tCkbWjyWtNFMTSTJvd7wSncMJS19aYOtQsS_m49HW2jzZ4';

    //     fetch(`${endpoint}?seed_artists=${artists}&target_danceability=${danceability}`, {
    //         method: "GET",
    //         headers: {
    //             Authorization: `Bearer ${userAccessToken}`
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(({tracks}) => {
    //         tracks.forEach(item => {
    //         console.log(`${item.name} by ${item.artists[0].name}`);
    //         })
    //     })
    // }
    // .then(data => data.json())
    // .then(({playlists}) => {
    //     console.log(playlists);
    //     this.setState({
    //         music: [...playlists.items]
    //     })
    //     playlists.items.forEach(element => {
    //         console.log(element.name)
    //     });
    // })
// }

    // handleChange = (e) => {
    //     this.setState({countryCode: e.target.value})
    // }


// class FetchMusic extends Component {
//     constructor() {
//         super()
//         this.state ={
//             music:[],
//             searchTerm: ''
//         }
//         this.apiKey = process.env.REACT_APP_API
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();

//         fetch(`
//         https://api.themoviedb.org/3/search/movie?api_key=c670b15c9ae6375c13f69ad895f4b722&query=${this.state.searchTerm}`)
//         .then(data => data.json())
//         .then(data => {
//             console.log(data);
//             this.setState({
//                 music: [...data.results]
//             })
//         })
//     }

//     handleChange = (e) => {
//         this.setState({searchTerm: e.target.value})
//     }
    

//     render() {
//         return (
//             <div className="music">
//                 <Nav />
//                 <SearchArea handleSubmit ={this.handleSubmit} handleChange={this.handleChange} />
//                 <MusicList music={this.state.music} />
//             </div>

//         )
//     }
// }
// export default FetchMusic;