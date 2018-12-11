import React from "react";
import {Link} from "react-router-dom";
import "../album.css"
import MessageTimeline from "./MessageTimeline";
import PropertyTimeline from "./PropertyTimeline";

const Homepage = ({currentUser}) => {
    if (!currentUser.isAuthenticated) {
        return (
            <div>
                <div className="home-hero">
                    <h1>Welcome to the world of Safe and Digital Real eState</h1>
                    <h4>Begin your journey to sell or buy a property with us!!</h4>
                    <Link to="/signup" className="btn btn-primary">
                        Sign up here
                    </Link>
                </div>

                <div className="image-container ">
                    <div className="item red">
                        <img src="https://preview.ibb.co/gQbzQ5/colt_steele_firemarshall.jpg"/>
                        <Link className="link-image" to="/signin">
                            <i className="fa fa-camera"></i>
                            <h4>San Francisco</h4>
                        </Link>
                    </div>

                    <div className="item blue">
                        <img src="https://bondlinkcdn.com/128/Cloudgate_2-cropped.ioy2OWJ4Xz.jpg" alt=""/>

                        <Link className="link-image" to="/signin">
                            <i className="fa fa-paw"></i>
                            <h4>Chicago</h4>
                        </Link>
                    </div>

                    <div className="item green">
                        <img src="http://preview.ibb.co/kd9Esk/colt_steele_smugglerscave.jpg"/>
                        <Link className="link-image" to="/signin">
                            <i className="fa fa-cloud"></i>
                            <h4>New York</h4>
                        </Link>
                    </div>
                </div>
            </div>

        );
    }

    return (
        <div>
            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">Welcome!!!</h1>
                    <p className="lead text-muted">We are transforming Real eState
                        Property transactions using the Blockchain technology by securing your data in distributed
                        digital blocks.
                    </p>
                    <h5>So, what are you planning to do today? Click on the buttons below to begin the journey</h5>
                    <p>
                        <Link to="/buy" className="btn btn-success my-2">Buying Properties</Link>
                        <Link to="/sell" className="btn btn-danger my-2">Selling Properties</Link>
                    </p>
                </div>
            </section>

            <hr/>
            <br/>

            <div className="container text-center">
                <h2>Recent Conversations</h2>
                <br/><br/>
            </div>

            <div className="container">
                <MessageTimeline
                    profileImageUrl={currentUser.user.profileImageUrl}
                    username={currentUser.user.username}
                />
            </div>
            <br/>

            <hr/>

            <div className="container text-center">
                <br/><br/>
                <h2>List of properties available for Sale</h2>
                <br/><br/>
            </div>

            <div className="container">
                <PropertyTimeline
                    profileImageUrl={currentUser.user.profileImageUrl}
                    username={currentUser.user.username}
                />
            </div>
        </div>
    );
};

export default Homepage;