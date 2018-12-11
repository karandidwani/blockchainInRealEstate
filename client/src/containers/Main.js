import React from "react";
import {Switch, Route, withRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import SellerPage from "../components/SellerPage";
import Property from "../components/Property";
import {authUser} from "../store/actions/auth";
import {removeError} from "../store/actions/errors";
import {createProperty} from "../store/actions/property";
import {getSelectedProperty} from "../store/actions/property";
import withAuth from "../hocs/withAuth";
import MessageForm from "../containers/MessageForm";
import PropertyTimeline from "../components/PropertyTimeline";
import PropertyValidation from "../components/PropertyValidation";


const Main = props => {
    const {authUser, errors, removeError, property, currentUser, createProperty} = props;
    console.log("in Main props is ", props);
    return (
        <div className="container">
            <Switch>
                <Route
                    exact path="/"
                    render={props => {
                        return (
                            <Homepage currentUser={currentUser} {...props} />
                        )
                    }
                    }
                />
                <Route
                    exact path="/buy"
                    render={props => {
                        return (
                            <PropertyTimeline
                                errors={errors}
                                currentUser={currentUser}
                                profileImageUrl={currentUser.user.profileImageUrl}
                                username={currentUser.user.username}
                                property={property}
                                {...props}
                            />
                        )
                    }
                    }
                />
                <Route
                    exact
                    path="/property"
                    render={props => {
                        return (
                            <Property
                                currentUser={currentUser}
                                property={property}
                                {...props} />
                        )
                    }
                    }
                />
                <Route
                    exact path="/sell"
                    render={props => {
                        return (
                            <SellerPage
                                removeError={removeError}
                                currentUser={currentUser}
                                onCreate={createProperty}
                                errors={errors}
                                {...props} />
                        )
                    }
                    }
                />
                < Route
                    exact
                    path="/signin"
                    render={props => {
                        return (
                            <AuthForm
                                removeError={removeError}
                                onAuth={authUser}
                                errors={errors}
                                buttonText="Log in"
                                heading="Welcome Back."
                                {...props}
                            />
                        );
                    }
                    }
                />
                <Route
                    exact
                    path="/signup"
                    render={props => {
                        return (
                            <AuthForm
                                removeError={removeError}
                                onAuth={authUser}
                                errors={errors}
                                signUp
                                buttonText="Sign up"
                                heading="Start your journey here..."
                                {...props}
                            />
                        );
                    }}
                />
                < Route
                    path="/users/:id/messages/new"
                    component={withAuth(MessageForm)}
                />
                <Route
                    exact path="/propertyValidationPending"
                    render={props => {
                        return (
                            <PropertyValidation currentUser={currentUser} {...props} />
                        )
                    }
                    }
                />

            </Switch>
        </div>
    );
}

function mapStateToProps(state) {
    console.log("in Main.js state is ", state)
    return {
        currentUser: state.currentUser,
        errors: state.errors,
        property: state.property,
    };
}

export default withRouter(
    connect(mapStateToProps, {authUser, removeError, createProperty, getSelectedProperty})(Main)
);
