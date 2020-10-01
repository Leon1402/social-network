import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Dialogs from './Main/Dialogs/Dialogs';
import Profile from './Main/Profile/Profile';
import Navbar from './Navbar/Navbar';

const App = (props) => {
    return (
        <BrowserRouter >
            <div className="App">
                <Header />
                <Navbar />
                <div className='main'>
                    <Route path='/Profile' render={() => <Profile
                        state={props.store.getState().profilePage}
                        dispatch={props.store.dispatch.bind(props.store)} />} />

                    <Route path='/Dialogs' render={() => <Dialogs
                        state={props.store.getState().dialogsPage}
                        dispatch={props.store.dispatch.bind(props.store)} />} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
