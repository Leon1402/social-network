import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import DialogsContainer from './Main/Dialogs/DialogsContainer';
import Profile from './Main/Profile/Profile';
import UsersContainer from './Main/Users/UsersContainer';
import Navbar from './Navbar/Navbar';

const App = (props) => {
    return (
        <BrowserRouter >
            <div className="App">
                <Header />
                <Navbar />
                <div className='main'>
                    <Route path='/Profile' render={() => <Profile/>} />
<<<<<<< HEAD
                    <Route path='/Dialogs' render={() => <DialogsContainer />} />
=======
                    <Route path='/Dialogs' render={() => <DialogsContainer/>} />
                    <Route path='/Users' render={() => <UsersContainer/>} />
>>>>>>> 8ff74818cdd78ff7201c2d2a9bb126e891c0c8c9
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;