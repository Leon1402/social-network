import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';

let rerenderEntireTree = () => {
  ReactDOM.render(
    <Provider store={store}>
<<<<<<< HEAD
      <App />
=======
      <App/>
>>>>>>> 8ff74818cdd78ff7201c2d2a9bb126e891c0c8c9
    </Provider>,
    document.getElementById('root')
  );
}
rerenderEntireTree();
<<<<<<< HEAD
=======


>>>>>>> 8ff74818cdd78ff7201c2d2a9bb126e891c0c8c9
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
