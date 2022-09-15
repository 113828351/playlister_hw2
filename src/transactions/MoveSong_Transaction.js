import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * MoveSong_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class MoveSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initOldSongIndex, initNewSongIndex) {
        super();
        this.app = initApp;
        this.oldSongIndex = initOldSongIndex;
        this.newSongIndex = initNewSongIndex;
    }

    doTransaction() {
        this.app.moveSong(this.oldSongIndex, this.newSongIndex);
    }
    
    undoTransaction() {
        this.app.moveSong(this.newSongIndex, this.oldSongIndex);
    }
}