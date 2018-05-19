import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Front from './containers/Front';
import Consoles from './containers/Consoles';
import Login from './containers/Login';
import Buypage from './containers/Buypage';
import Resister from './containers/Register';
import Cart from './containers/Cart';
import Product from './containers/Product';
import LargeList from './containers/LargeList';

class Router extends Component {
    render() {
        return (
            <div>
                <Route 
                    exact path="/"
                    component={ Front }
                    />
                <Route
                    path='/Buy'
                    component={ Buypage }
                    />
                <Route 
                        path="/Login" 
                        component={ Login }
                        />
                <Route 
                    path="/Nintendo" 
                    component={ Consoles }
                    />
                <Route 
                    path="/PlayStation" 
                    component={ Consoles }
                    />
                <Route
                    path="/Resistration"
                    component={ Resister }
                    />
                <Route 
                    path="/XBOX" 
                    component={ Consoles }
                    />
                <Route 
                    path="/Shopping_Cart" 
                    component={ Cart }
                    />
                <Route 
                    path="/Product/"  //Route /[Console_name]/[product_name]
                    component={ Product }
                    />
                <Route 
                    path="/ProductList"  //Route /[Console_name]/[product_name]
                    component={ LargeList }
                    />
            </div>
        );
    }
}

export default Router;