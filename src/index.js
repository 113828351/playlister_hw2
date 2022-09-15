import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// THIS FUNCTION TESTS TO SEE IF THIS APP HAS
// DATA IN LOCAL STORAGE. IF IT DOES, TRUE IS
// RETURNED, ELSE FALSE 
function isInLocalStorage() {
  return localStorage.getItem("playlister-data") != null;
}

function loadListsFromJSON(jsonFilePath) {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let text = this.responseText;
      let lists = JSON.parse(text).playlists;

      // GO THROUGH THE LISTS AND SAVE EACH USING THEIR KEY
      for (let i = 0; i < lists.length; i++) {
        let listData = lists[i];
        let listString = JSON.stringify(listData);
        localStorage.setItem("playlister-list-" + listData.key, listString);
      }

      // THIS IS OUR SESSION DATA THAT WE'LL NEED TO
      // HELP US DEAL WITH THE LISTS
      localStorage.setItem("playlister-data", JSON.stringify(
        {
          "nextKey" : 3,
          "counter" : 3,
          "keyNamePairs" : [
            {"key": "0", "name": "Space Rock"},
            {"key": "1", "name": "Proggy Pop"}, 
            {"key": "2", "name": "Don't be Rude"}
          ]
        }));
      launch();
    }
  }
  xmlhttp.open("GET", jsonFilePath, true);
  xmlhttp.send();
}

function launch() {
  // IF NO DATA IS IN LOCAL STORAGE THEN LOAD ALL THE TEST
  // DATA FROM THE JSON FILE AND PUT IT THERE
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

if (!isInLocalStorage()) {
  loadListsFromJSON("./data/default_lists.json");
}
else {
  launch();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();