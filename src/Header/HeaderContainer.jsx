import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {getAuthDataThunkCreator} from './../redux/authReducer'

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthDataThunkCreator()
    }
    render() {
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state) => ({
    id: state.authPage.id,
    email:  state.authPage.email,
    login: state.authPage.login
})

export default connect(mapStateToProps, {getAuthDataThunkCreator})(HeaderContainer);
