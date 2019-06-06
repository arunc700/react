import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Page1, Page2, Page3, Page4 } from './Pages/Page';
import Post from './Post'



class About extends Component {
 
    render() {

        

        return (
            <div>
                <header className="ph3 ph5-ns pt3 bb bt b--black-10 mb4">
                    <div className="mw9 center">
                        <Link className="f6 fw6 b dib mr3 mb3 pb1 link hover-blue black-70 ttc" to="/About/Page1">Page 1</Link >
                        <Link className="f6 fw6 b dib mr3 mb3 pb1 link hover-blue black-70 ttc" to="/About/Page2">Page 2</Link >
                        <Link className="f6 fw6 b dib mr3 mb3 pb1 link hover-blue black-70 ttc" to="/About/Page3">Page 3</Link >
                        <Link className="f6 fw6 b dib mr3 mb3 pb1 link hover-blue black-70 ttc" to="/About/Page4">Page 4</Link >
                    </div>
                </header>
                <div className="cf pa4">
                    <div className="fl w-100 w-75-ns pr0 pr2-ns">
                    <h2>Hello Post</h2>                    
                         <Post></Post>
                    </div>
                    <div className="fl w-100 w-25-ns pl0 pl2-ns">
                    <h2>Right Menu</h2>  
                        <Route exact path="/About/Page1" component={Page1} />
                        <Route path="/About/Page2" component={Page2} />
                        <Route path="/About/Page3" component={Page3} />
                        <Route path="/About/Page4" component={Page4} />
                    </div>
                </div>
            </div>
        )
    }
}
export default About