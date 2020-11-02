import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../common/FormControl';
import { logIn, logOut } from '../../redux/authReducer';
import { maxLength, required } from '../../utils/validators';

const maxInputLength = maxLength(30)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type='input' name='email'
                    placeholder='e-mail *' component={Input}
                    validate={[required, maxInputLength]} />
            </div>
            <div>
                <Field type='password' name='password' placeholder='password *'
                    component={Input} validate={[required, maxInputLength]} />
            </div>
            <div>
                <Field type='checkbox' name='rememberMe' component='input' />remember me
            </div>
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