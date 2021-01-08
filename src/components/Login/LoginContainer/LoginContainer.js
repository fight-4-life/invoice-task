import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {getAuthUserData, setLogin} from "../../../redux/authReducer";
import {getAvatar, getLogin} from "../../../redux/selectors";
import {Login} from "../Login";

class LoginContainer extends React.Component {
    render() {
        return <Login
            avatarUrl={this.props.avatarUrl}
            login={this.props.login}
            getAuthUserData={this.props.getAuthUserData}
            setLogin={this.props.setLogin}
            isAuth={this.props.isAuth}
            hasError={this.props.hasError}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        avatarUrl: getAvatar(state),
          isAuth: state.auth.isAuth,
        hasError: state.auth.hasError,
         login: getLogin(state),
        //todo вывести auth and error в селекторы
    }
}

export default compose(
    connect(mapStateToProps, {setLogin, getAuthUserData})
)(LoginContainer)