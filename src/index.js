import React from 'react'; //core of the package that does DOM manipulation for us
import ReactDOM from 'react-dom';//based on what screen we are rendering to, react-dom specifically used for websites. React-native for mobile development
import './index.css';
import App from './App';//importing cardlist component, parent of card
import * as serviceWorker from './serviceWorker';
import 'tachyons';


//using the render function to create the default webpage
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
