import React from 'react';
import s from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
    state = {
        status: this.props.status,
        editMode: false
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate (prevProps, prevState) {
        if(prevProps.status !== this.props.status)
        this.setState({
            status: this.props.status
        })
        let a = prevProps;
        let b = prevState;
        console.log('componentDidUpdate')
    }

    render() {
        return (
            <div >
                {!this.state.editMode &&
                    <div>
                        <span onClick={this.activateEditMode}>
                            <h1 className={s.color}>{this.props.status || 'No Status'}</h1>
                        </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} 
                        onBlur={this.deactivateEditMode} value={this.state.status} />
                    </div>
                }
            </div>
        )
    }
}


export default ProfileStatus;