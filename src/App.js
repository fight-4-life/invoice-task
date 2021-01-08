import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {Sidebar} from "./components/Sidebar/Sidebar";
import LoginContainer from "./components/Login/LoginContainer/LoginContainer";
import TerminalsContainer from "./components/Terminals/TerminalsContainer";
import BuyersContainer from "./components/Buyers/BuyersContainer";
import BuyerContainer from "./components/Buyer/BuyerContainer";
import {NotFound} from "./components/404/404";

import 'antd/dist/antd.css';
import {Layout} from "antd";
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Layout style={{backgroundColor: 'white'}}>
                    <Sidebar/>
                    <div className='app-wrapper-content'>
                        <Layout style={{backgroundColor: 'white'}}>

                            <Switch>
                                <Route
                                    path='/terminals'
                                    render={() => <TerminalsContainer
                                    />}
                                />
                                <Route path='/buyers'
                                       exact={true}
                                       render={() => <BuyersContainer
                                       />}
                                />
                                <Route path='/buyers/:id'
                                       exact={true}
                                       render={() => <BuyerContainer
                                       />}
                                />
                                <Route path='/login'
                                       render={() => <LoginContainer
                                       />}
                                />
                                <Route
                                    component={NotFound}/>
                            </Switch>
                        </Layout>
                    </div>
                </Layout>
            </div>
        </BrowserRouter>
    );
}

export default App;
