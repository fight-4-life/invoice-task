import React from 'react'
import {Redirect} from "react-router-dom";
import {message} from 'antd';
import {GithubOutlined} from '@ant-design/icons';
import s from './Login.module.css'

export class Login extends React.Component {
    componentDidUpdate(prevProps) {
        if (prevProps.isAuth !== this.props.isAuth) {
            message.success('Добро пожаловать!')
        }
        if (prevProps.hasError !== this.props.hasError) {
            message.error('Такого пользовтеля не существует')
        }
    }

    constructor(props) {
        super(props);

        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const {value} = this.state;
        const re = new RegExp("(?=.*[A-Z])(?=.{8,})(?=.*[0-9])");
        const isOk = re.test(value);

        if (!isOk) {
            return message.error('Пароль должен быть более 8 символов, содержать 1 заглавную букву и одну цифру!')
        }
        this.props.getAuthUserData(this.props.login)
    }

    onInputChange(e) {
        this.props.setLogin(e.target.value)
    }

    render() {
        if (this.props.isAuth) {
            return <Redirect to={'/terminals'}/>
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <div className={s.formContainer}>
                    <div>
                        <div> <GithubOutlined /> Логин:</div>
                        <input type="textarea" required onChange={this.onInputChange}/>
                    </div>
                    <div>
                        <div>Пароль:</div>
                        <input type="password" required value={this.state.value} onChange={this.handleChange}/>
                    </div>
                    <div className={s.btnWrapper}>
                        <input type="submit" value="Войти"/>
                    </div>
                </div>
            </form>
        );
    }
}
