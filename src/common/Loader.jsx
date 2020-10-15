import React from 'react';
import s from './Loader.module.css';


const Loader = (props) => {
    return (
        <div className={s.loader}>
           <div className={`${s.loaderItem} ${s.loaderItem1}`}></div>
           <div className={`${s.loaderItem} ${s.loaderItem2}`}></div>
           <div className={`${s.loaderItem} ${s.loaderItem3}`}></div>
           <div className={`${s.loaderItem} ${s.loaderItem4}`}></div>
           <div className={`${s.loaderItem} ${s.loaderItem5}`}></div>
        </div>
    );
}

export default Loader;
