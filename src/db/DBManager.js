export default class DBManager {
    // QUERY AND MUTATION FUNCTIONS GET/SET DATA FROM/TO
    // AN EXTERNAL SOURCE, WHICH FOR THIS APPLICATION
    // MEANS THE BROWSER'S LOCAL STORAGE
    queryGetSessionData = () => {
        let sessionDataString = localStorage.getItem("playlister-data");
        return JSON.parse(sessionDataString);
    }

    queryIsList = (key) => {
        let list = localStorage.getItem("playlister-list-" + key);
        return list != null;
    }

    /**
     * This query asks local storage for a list with a particular key,
     * which is then returned by this function.
     */
    queryGetList = (key) => {
        let listString = localStorage.getItem("playlister-list-" + key);
        return JSON.parse(listString);
    }

    mutationCreateList = (list) => {
        this.mutationUpdateList(list);
    }

    mutationUpdateList = (list) => {
        // AND FLOW THOSE CHANGES TO LOCAL STORAGE
        let listString = JSON.stringify(list);
        localStorage.setItem("playlister-list-" + list.key, listString);
    }
    
    mutationUpdateSessionData = (sessionData) => {
        let sessionDataString = JSON.stringify(sessionData);
        localStorage.setItem("playlister-data", sessionDataString);
    }

    mutationDeleteList = (key) => {
        if (this.queryIsList(key))
            localStorage.removeItem("playlister-list-" + key);
    }
}