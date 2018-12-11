import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../store/actions/auth";

class Navbar extends Component {
    logout = e => {
        e.preventDefault();
        this.props.logout();
    };

    render() {
        return (
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">
                            <h3>
                                <img className="home-img"
                                     src={require("../images/home.png")}
                                     alt="Home"/>
                                Home
                            </h3>
                        </Link>
                    </div>
                    {this.props.currentUser.isAuthenticated ? (
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link
                                    to={`/users/${this.props.currentUser.user.id}/messages/new`}
                                >
                                    <i className="fas fa-envelope"></i>New Message
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/sell`}
                                >
                                    <i className="fas fa-envelope"></i>Add Property
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/mymessages`}
                                >
                                    <i className="fas fa-envelope"></i>My messages
                                </Link>
                            </li>
                            <li>
                                <a onClick={this.logout}><i className="fas fa-sign-out-alt"></i>Log out</a>
                            </li>
                        </ul>
                    ) : (
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/signup">
                                    <i className="fa fa-user"></i>
                                    Signup
                                </Link>
                            </li>
                            <li>
                                <Link to="/signin">
                                    <i className="fa fa-sign-in"></i>
                                    Log in
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    };
}

export default connect(mapStateToProps, {logout})(Navbar);