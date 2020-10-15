import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <div className={s.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png'
                alt='picture' />
            <div className={s.login}>
                {props.login? props.login:<NavLink to='/auth/me'>Login</NavLink>}
                
            </div>
        </div>
    );
}

export default Header;
