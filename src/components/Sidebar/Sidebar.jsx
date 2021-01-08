import React from 'react'
import {NavLink} from "react-router-dom";
import AvatarContainer from "./Avatar/Avatar";
import {Footer} from "./Footer/Footer";
import {AuditOutlined, UserOutlined} from '@ant-design/icons';
import {Layout, Menu} from 'antd';
import s from './Sidebar.module.css'

const {Sider} = Layout;

export const Sidebar = () => {
    return (

        <Sider
            breakpoint="md"
            collapsedWidth="0"
            style={{}}
            width={220}
            theme={'light'}
        >
            <div className={s.sidebar_wrapper} style={{padding: 20, minHeight: '100vh'}}>
                <AvatarContainer/>
                <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1" icon={<AuditOutlined/>}>
                        <NavLink to='/terminals'>Терминалы</NavLink>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined/>}>
                        <NavLink to='/buyers'>Покупатели</NavLink>
                    </Menu.Item>
                </Menu>
                <Footer/>
            </div>
        </Sider>
    )
}