import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import DialogsContainer from './Main/Dialogs/DialogsContainer';
import ProfileContainer from './Main/Profile/ProfileContainer';
import UsersContainer from './Main/Users/UsersContainer';
import Navbar from './Navbar/Navbar';

const App = (props) => {
    return (
        <BrowserRouter >
            <div className="App">
                <Header />
                <Navbar />
                <div className='main'>
                    <Route path='/Profile' render={() => <ProfileContainer/>} />
                    <Route path='/Dialogs' render={() => <DialogsContainer/>} />
                    <Route path='/Users' render={() => <UsersContainer/>} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
