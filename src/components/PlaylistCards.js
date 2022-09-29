import SongCard from './SongCard.js';
import React from "react";

export default class PlaylistCards extends React.Component {
    render() {
        const { currentList, 
                moveSongCallback,
                editSongCallback,
                deleteSongCallback,
            selected}  = this.props;
        if (currentList === null) {
            return (
                <div id="playlist-cards"></div>
            )
        }
        else {
            let selectClass1 = "unselected-playlist-card";
            if (selected) {
                selectClass1 = "selected-playlist-card";
            }
            return (
                <div id="playlist-cards">
                    {
                        currentList.songs.map((song, index) => (
                            <SongCard
                                id={'playlist-song-' + (index+1)}
                                key={'playlist-song-' + (index+1)}
                                song={song}
                                onClick={this.handleClick}
                                
                                moveCallback={moveSongCallback}
                                editSongCallback = {editSongCallback}
                                deleteSongCallback = {deleteSongCallback}
                                
                                index = {index}
                            />
  
                        ))
                    }
                </div>
                
            )
        }
    }
}