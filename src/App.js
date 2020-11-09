import React from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { compose } from 'redux';
import store from './redux/reduxStore';
import './App.css';
import Loader from './common/Loader';
import HeaderContainer from './Header/HeaderContainer';
import DialogsContainer from './Main/Dialogs/DialogsContainer';
import LoginContainer from './Main/Login/Login';
import ProfileContainer from './Main/Profile/ProfileContainer';
import UsersContainer from './Main/Users/UsersContainer';
import Navbar from './Navbar/Navbar';
import { initialization } from './redux/appReducer'

class App extends React.Component {
    componentDidMount() {
        this.props.initialization();
    }
    render() {
        return (
            <div className="App">
                <HeaderContainer />
                <Navbar />
                {this.props.initialized
                    ? <div className='main'>
                        <Route path='/Profile/:id?' render={() => <ProfileContainer />} />
                        <Route path='/Dialogs' render={() => <DialogsContainer />} />
                        <Route path='/Users' render={() => <UsersContainer />} />
                        <Route path='/Login' render={() => <LoginContainer />} />
                    </div>
                    : <Loader />}
            </div>
        );
    }

}
let mapStateToProps = state => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    connect(mapStateToProps, { initialization }),
)(App);

export default (props) => {
    return <Provider store={store}>
        <BrowserRouter>
            <AppContainer />
        </BrowserRouter>
    </Provider>
}