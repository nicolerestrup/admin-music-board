import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from 'firebase';
import serviceAccountKey from './serviceAccountKey.json';


firebase.initializeApp(serviceAccountKey);

ReactDOM.render(<App />, document.getElementById('root'))
