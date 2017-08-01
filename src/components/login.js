import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import * as LoginActions from '../actions/login-actions';
import '../styles/login.css';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fieldValues: {
                email: '',
                password: ''
            },
            fieldErrors: {
                email: '',
                password: ''
            }

        }
    }

    handleChange(e) {
        this.setState({
            fieldValues: Object.assign({}, this.state.fieldValues, {
                [e.target.name]: e.target.value
            })
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        let values = Object.keys(this.state.fieldValues);

        let errors = {};
        values.forEach((key) => {
            if (!this.state.fieldValues[key]) {
                errors[key] = "Required field";
            }
        });

        if (this.state.fieldValues.password && this.state.fieldValues.password.length < 3) {
            errors.password = "Your password should be minimum 5 characters";
        }

        this.setState({fieldErrors: errors});

        this
            .props
            .action
            .loginUser(this.state.fieldValues)

    }

    render() {
        return (
            <div className="login-page">
                <div className="form">
                    <form className="login-form" onSubmit={(e) => this.handleSubmit(e)}>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={(e) => this.handleChange(e)}/> {this.state.fieldErrors['email']
                            ? this.state.fieldErrors['email']
                            : ''}
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={(e) => this.handleChange(e)}/> {this.state.fieldErrors['password']
                            ? this.state.fieldErrors['password']
                            : ''}
                        <button type="submit" value="Submit">login</button>
                        <p className="message">Not registered?
                            <Link activeClassName="active" to={`/registration`}>Create an account</Link>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(LoginActions, dispatch)
    }
}
export default connect(null, mapDispatchToProps)(Login);
