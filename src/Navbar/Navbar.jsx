import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <div className={s.nav}>
            <div>
                <NavLink to='/Profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/Dialogs' activeClassName={s.active}>Messages</NavLink> 
            </div>
            <div>
                <a href='#'>News</a>
            </div>
            <div>
                <a href='#'>Music</a>
            </div>
            <div>
                <a href='#'>Settings</a>
            </div>
        </div>
    );
}

export default Navbar;
