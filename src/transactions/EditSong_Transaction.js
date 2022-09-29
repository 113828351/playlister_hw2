import jsTPS_Transaction from "../common/jsTPS.js"

export default class EditSong_Transaction extends jsTPS_Transaction{
    constructor(initApp, index){
        super();
        this.app = initApp;
        this.index = index;
        this.oldTitle = this.app.state.currentList.songs[this.index].title;
        this.oldArtist = this.app.state.currentList.songs[this.index].artist;
        this.oldYouTubeId = this.app.state.currentList.songs[this.index].youTubeId;
        
        this.newTitle = document.getElementById("edit-song-modal-title-textfield").value;
        this.newArtist = document.getElementById("edit-song-modal-artist-textfield").value;
        this.newYouTubeId = document.getElementById("edit-song-modal-youTubeId-textfield").value;
    }
    doTransaction(){
        this.app.editSong(this.index, this.newTitle, this.newArtist, this.newYouTubeId);
    }
    undoTransaction(){
        this.app.editSong(this.index, this.oldTitle, this.oldArtist, this.oldYouTubeId)
    }
}