import React, {Component} from "react";
import PropTypes from "prop-types";

class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            firstname: "",
            lastname: "",
            password: "",
            profileImageUrl: ""
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        const authType = this.props.signUp ? "signup" : "signin";
        this.props
            .onAuth(authType, this.state)
            .then(() => {
                this.props.history.push("/");
            })
            .catch(() => {
                return;
            });
    };

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    render() {
        const {email, username,firstname, lastname, password, profileImageUrl} = this.state;
        const {
            heading,
            buttonText,
            errors,
            signUp,
            history,
            removeError
        } = this.props;

        history.listen(() => {
            removeError();
        });

        return (
            <div className="form-back">
                <div className="row justify-content-md-center text-center">
                    <div className="col-md-6">
                        <div className="jumbotron form-class">
                            <form onSubmit={this.handleSubmit}>
                                <h2>{heading}</h2>
                                {errors.message && (
                                    <div className="alert alert-danger">{errors.message}</div>
                                )}
                                <label htmlFor="email">E-mail</label>
                                <input
                                    autoComplete="off"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    onChange={this.handleChange}
                                    type="text"
                                    value={email}
                                />
                                <label htmlFor="password">Password</label>
                                <input
                                    autoComplete="off"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    onChange={this.handleChange}
                                    type="password"
                                    value={password}
                                />
                                {signUp && (
                                    <div>
                                        <label htmlFor="username">Username</label>
                                        <input
                                            autoComplete="off"
                                            className="form-control"
                                            id="username"
                                            name="username"
                                            onChange={this.handleChange}
                                            type="text"
                                            value={username}
                                        />
                                        <label htmlFor="firstname">Firstname</label>
                                        <input
                                            autoComplete="off"
                                            className="form-control"
                                            id="firstname"
                                            name="firstname"
                                            onChange={this.handleChange}
                                            type="text"
                                            value={firstname}
                                        />
                                        <label htmlFor="lastname">Lastname</label>
                                        <input
                                            autoComplete="off"
                                            className="form-control"
                                            id="lastname"
                                            name="lastname"
                                            onChange={this.handleChange}
                                            type="text"
                                            value={lastname}
                                        />
                                        <label htmlFor="image-url">Image URL</label>
                                        <input
                                            autoComplete="off"
                                            className="form-control"
                                            id="image-url"
                                            name="profileImageUrl"
                                            onChange={this.handleChange}
                                            type="text"
                                            value={profileImageUrl}
                                        />
                                    </div>
                                )}
                                <br/>
                                <div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block btn-lg"
                                    >
                                        {buttonText}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthForm;