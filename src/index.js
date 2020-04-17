import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import * as firebase from 'firebase';
import serviceAccountKey from './serviceAccountKey.json';
import Auth from './Auth';


firebase.initializeApp(serviceAccountKey);

ReactDOM.render(<Auth />, document.getElementById('root'))
