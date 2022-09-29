import jsTPS_Transaction from "../common/jsTPS.js"
export default class DeleteSong_Transaction extends jsTPS_Transaction {
    constructor(initApp,initDeletedSong, initSongIndexToDelete){
        super();
        this.app = initApp;
        this.deletedSong = initDeletedSong;
        this.SongIndexToDelete = initSongIndexToDelete;
    }
    doTransaction() {
        this.app.deleteMarkedSong();
    }
    undoTransaction() {
        this.app.addDeletedSong(this.deletedSong,this.SongIndexToDelete);
    }
}