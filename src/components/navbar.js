import React from 'react';

class navbar extends React.Component {
    state = {};
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                
                <img style={{paddingLeft:"98px"}} src='logo.PNG' />
                
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#" >
                                Home <span className="sr-only" ></span>
                            </a>
                        </li>
                        

                            <li className="nav-item">
                            <a className="nav-link" href="#">
                                Bus
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Events
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                |
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" >
                                Login/Signup
                            </a>
                        </li>
                        </ul>
                        <img src='call bookkaru.PNG'/>
                </div>
            </nav>
        );
    }
}

export default navbar;
