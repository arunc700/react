import React, { Component } from 'react';
import { BrowserRouter as Router,   Route } from 'react-router-dom';
import {} from 'react'
import 'tachyons'
import Menu from './../controls/Menu'
import Footer from './../controls/Footer'
import About from './../AboutUs/About'
import Contact from './../ContactUs/Contact'

import Demo from '../Avatar/demo';


class Home extends Component {
    render() {
        return (
            <div>
                <Router>

                    {/* "Load menu" */}
                    <Menu />
                    <hr></hr>
                    <Route exact path="/" component={Demo} />
                    <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />
                    <hr></hr>
                    <Footer />

                </Router>
            </div>
        )
    }
}

export default Home

