import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Front from './containers/Front';
import Consoles from './containers/Consoles';
import Login from './components/Login'

class Router extends Component {
    render() {
        return (
            <div>
                <Route 
                    exact path="/"
                    component={ Front }
                    />
                <Route 
                    path="/PlayStation" 
                    component={ Consoles }
                    />
                <Route 
                    path="/Nintendo" 
                    component={ Consoles }
                    />
                <Route 
                    path="/XBOX" 
                    component={ Consoles }
                    />
                <Route 
                    path="/Login" 
                    component={ Login }
                    />
            </div>
        );
    }
}

export default Router;