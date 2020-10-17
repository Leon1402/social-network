import React from 'react';
import s from './../ProfileInfo.module.css';

class StatusProfile extends React.Component {
    state = {
        activeBar: false,
        status: 'hello'
    }
    activeStatusBar = () => {
        this.setState({
            activeBar: true
        })
    }
    deactiveStatusBar = () => {
        this.setState({
            activeBar: false
        })
    }
    changeStatusText = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    render() {
        return (
            <div className={s.statusProfile}>
                {!this.state.activeBar ?
                    <div className={s.status}>
                        <span onClick={this.activeStatusBar}>{this.state.status}</span>
                    </div>
                    : <div>
                        <input
                            onChange={this.changeStatusText}
                            autoFocus
                            onBlur={this.deactiveStatusBar}
                            value={this.state.status} />
                    </div>}
            </div>
        );
    }
}

export default StatusProfile;
