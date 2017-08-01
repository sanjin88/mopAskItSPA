import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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
            fieldValues: Object.assign({}, this.state.fieldValues, { [e.target.name]: e.target.value })
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


        this.setState({
            fieldErrors: errors
        });

        
        this.props.action.loginUser(this.state.fieldValues)

    }

    render() {
        return (
            <div className="login">
                <h2>Login:</h2>
                <div className="login-fields">
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="field-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)} />
                            {this.state.fieldErrors['email'] ? this.state.fieldErrors['email'] : ''}
                        </div>
                        <div className="field-group">
                            <label htmlFor="password">Password</label>
                            <input type="text" name="password" value={this.state.password} onChange={(e) => this.handleChange(e)} />
                            {this.state.fieldErrors['password'] ? this.state.fieldErrors['password'] : ''}
                        </div>
                        <div className="field-group">
                            <input type="submit" value="Submit" />
                        </div>
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
