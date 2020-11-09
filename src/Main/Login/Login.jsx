import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { fieldForm, Input } from '../../common/FormControl';
import { logIn, logOut } from '../../redux/authReducer';
import { maxLength, required } from '../../utils/validators';

const maxInputLength = maxLength(30)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {fieldForm('input','email','e-mail *',Input,[required, maxInputLength])}
            {fieldForm('password','password','password *',Input,[required, maxInputLength])}
            {fieldForm('checkbox', 'rememberMe', null, 'input', null, {text: 'remember me'})}
        
            <div>{props.error}</div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const ReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    let onSubmit = (dataForm) => {
        props.logIn(dataForm)
    }
    if (props.isAuth) return <Redirect to='/profile' />
    return <div>
        <h1>Login</h1>
        <ReduxForm onSubmit={onSubmit} />
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.authPage.isAuth
})

export default connect(mapStateToProps, { logIn, logOut })(Login)