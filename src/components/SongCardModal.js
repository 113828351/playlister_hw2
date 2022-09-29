import React, { Component } from 'react';

export default class DeleteSongModal extends Component {
    render() {
        const {currentList, songIndex, hideDeleteSongModalCallback, deleteSongCallback} = this.props
        let name = "";
        let Artist = "";
        if (currentList!= null && songIndex != null){
            name = currentList.songs[songIndex].title;
            theArtist = currentList.songs[songIndex].artist;
        }
        return (
            <div
            class="modal" 
            id="delete-song-modal" 
            data-animation="slideInOutDown">
                <div class="modal-root" id='verify-delete-song-root' >
                    <div class="modal-north">
                        Delete Song?
                    </div>
                    <div class="modal-center">
                        <div class="modal-center-content">
                            Are you sure you wish to remove <span>{name}</span> by<span>{theArtist}</span> from the playlist?
                        </div>
                    </div>
                    <div class="modal-south">
                        <input type="button" 
                            id="delete-song-confirm-button" 
                            class="modal-button" 
                            onClick={deleteSongCallback}
                            value='Confirm' />
                        <input type="button" 
                            id="delete-song-cancel-button" 
                            class="modal-button" 
                            onClick={hideDeleteSongModalCallback}
                            value='Cancel' />
                    </div>
                </div>
            </div>
        );
    }
}