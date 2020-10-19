import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { logIn, logOut } from '../../redux/authReducer';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type='input' name='email' placeholder='e-mail' component='input'/>
            </div>
            <div>
                <Field type='password' name='password' placeholder='password' component='input'/>
            </div>
            <div>
               <Field type='checkbox' name='rememberMe' component='input'/>remember me
            </div>
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
    return <div>
        <h1>Login</h1>
        <ReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps ,{logIn, logOut})(Login)