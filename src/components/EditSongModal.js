import React, { Component } from "react";

export default class EditSongModal extends Component {
  render() {
    const {hideEditSongModalCallback, editSongCallback} = this.props;

      return(
          <div
              class = "modal"
              id="edit-song-modal"
              data-animation="zoomInOut">
                  <div class="modal-root">
                      <div class="modal-north">Edit Song</div>
                      <div class="modal-center">
                          <div class="modal-center-content" id='edit-song-modal-center-content'>
                              <div id='title-prompt'>Title: </div><input type="text" id="edit-song-modal-title-textfield" onClick="this.select()"></input>
                              <div id='artist-prompt'>Artist: </div><input type="text" id="edit-song-modal-artist-textfield" onClick="this.select()"></input>
                              <div id='you-tube-id-prompt'>YouTube ID: </div><input type="text" id="edit-song-modal-youTubeId-textfield" onClick="this.select()"></input>
                          </div>
                      </div>
                      <div class="modal-south">
                          <input type="button" 
                              id="edit-song-confirm-button" 
                              class="modal-button" 
                              onClick={editSongCallback}
                              value='Confirm' />
                          <input type="button" 
                              id="edit-song-cancel-button" 
                              class="modal-button" 
                              onClick={hideEditSongModalCallback}
                              value='Cancel' />
                      </div>
                  </div>
          </div>
      )
  }
}