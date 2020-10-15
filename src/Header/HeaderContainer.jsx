import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {setAuthData} from './../redux/authReducer'
import { AuthAxios } from '../api/api';

class HeaderContainer extends React.Component {
    componentDidMount() {
        AuthAxios.setAuthData()
            .then(data => {
                this.props.setAuthData(data.data)
            });
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

export default connect(mapStateToProps, {setAuthData})(HeaderContainer);
