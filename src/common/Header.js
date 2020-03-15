import {
    BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import React, { Component } from 'react';
import Home from "../component/Home";
import AddMoive from '../component/AddMovie';
import './header.scss';

class Header extends Component {
    render() {
        return (
            //Routing for navigation
            <Router>
                <div className="header">
                    <ul className="tabs">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/addMovie">ADD MOVIE</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/addMovie" component={AddMoive}></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Header;