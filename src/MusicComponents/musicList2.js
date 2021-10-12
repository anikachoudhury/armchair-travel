import Music from "./music2"
import './musicList2.css';

const MusicList = (props) => {
    const musicCompontents = props.music.map((music, index) => {
        return <Music music={music} key={index}/>
    });

    return (
        <div className="music-list">
            {musicCompontents}
        </div>
    )
}

export default MusicList;