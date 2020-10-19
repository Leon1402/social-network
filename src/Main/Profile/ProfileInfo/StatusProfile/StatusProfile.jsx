import React from 'react';
import s from './../ProfileInfo.module.css';

class StatusProfile extends React.Component {
    state = {
        activeBar: false,
        status: this.props.status
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
        this.props.updateStatus(this.state.status)
    }
    changeStatusText = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps) {
        if (prevProps.status !== this.props.status)
            this.setState({
                status: this.props.status
            })
    }
    render() {
        return (
            <div className={s.statusProfile}>
                {!this.state.activeBar ?
                    <div className={s.status}>
                        <span onClick={this.activeStatusBar}>{this.props.status || '-----'}</span>
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
