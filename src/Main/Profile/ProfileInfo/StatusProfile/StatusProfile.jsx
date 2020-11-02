import React, { useEffect, useState } from 'react';
import s from './../ProfileInfo.module.css';

const StatusProfile = (props) => {
    let [status, setStatus] = useState(props.status);
    let [activeBar, setActiveBar] = useState(false);

    useEffect(()=> {
        setStatus(props.status)
    }, [props.status])

    let activeStatusBar = () => {
        setActiveBar(true)
    }
    let deactiveStatusBar = () => {
        setActiveBar(false)
        props.updateStatus(status)
    }
    let changeStatusText = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={s.statusProfile} >
            {!activeBar ?
                <div className={s.status}>
                    <span onClick={activeStatusBar}>{props.status || '-----'}</span>
                </div>
                : <div>
                    <input
                        onChange={changeStatusText}
                        autoFocus
                        onBlur={deactiveStatusBar}
                        value={status} />
                </div>
            }
        </div >
    );
}

export default StatusProfile;
