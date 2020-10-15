import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { addOneNew, addPost, updatedNewOne, updateNewPostText } from './state/state'



export let renderAllTree = (state) => {
ReactDOM.render(
  <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}
       addOneNew={addOneNew} updatedNewOne={updatedNewOne}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
