import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {getAvatar} from "../../../redux/selectors";
import s from './Avatar.module.css'

export const Avatar = (props) => {
    return (
        <div>
            {props.avatarUrl !== '' &&
            <img src={props.avatarUrl} className={s.avatar} alt='ava'/>}
        </div>
    )
}

class AvatarContainer extends React.Component {
    render() {
        return <Avatar
            avatarUrl={this.props.avatarUrl}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        avatarUrl: getAvatar(state),
    }
}

export default compose(
    connect(mapStateToProps, {})
)(AvatarContainer)