import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import About from '../About';
import Chats from '../Chats';
import Home from '../Home';

const RootRouter = () => {
    return (
        
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/about" component={About} />
            <Route path="/chats/:id" component={Chats} />
            <Route
                render={() => (
                <div>
                    <h1>I am 404</h1>
                </div>
                )}
            />
        </Switch>
        
    )
}

export default RootRouter
