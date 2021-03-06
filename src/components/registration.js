import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as RegistrationActions from '../actions/registration-actions';
import '../styles/registration.css';

import _ from 'lodash';

class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fieldValues: {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            },
            fieldErrors: {
                firstName: '',
                lastName: '',
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
        }, () => {
            const { registerUser } = this.props.action;

            if (_.isEmpty(this.state.fieldErrors)) {
                registerUser(this.state.fieldValues);
            }
        });
    }

    renderFormState() {

        if (this.props.registration.isInProgress) {
            return (
                <div>Registering User...</div>
            )
        } else {
            return (

<div className="login-page">
  <div className="form">
    <form className="login-form" onSubmit={(e) => this.handleSubmit(e)}>
      <input type="text" placeholder="First name" name="firstName" value={this.state.firstName} onChange={(e) => this.handleChange(e)} />
                            {this.state.fieldErrors['firstName'] ? this.state.fieldErrors['firstName'] : ''}
             <input type="text" placeholder="Last name" name="lastName" value={this.state.lastName} onChange={(e) => this.handleChange(e)} />
                            {this.state.fieldErrors['lastName'] ? this.state.fieldErrors['lastName'] : ''}
             <input type="text" placeholder="Email" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)} />
                            {this.state.fieldErrors['email'] ? this.state.fieldErrors['email'] : ''}
      <input type="password" placeholder="Password"name="password" value={this.state.password} onChange={(e) => this.handleChange(e)} />
       {this.state.fieldErrors['password'] ? this.state.fieldErrors['password'] : ''}
      <button type="submit" value="Submit" >Register</button>
    </form>
  </div>
</div>
            )
        }
    }

    render() {
        return (
            <div className="registration">
                {this.renderFormState()}
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        registration: state.registration
    };
}


function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(RegistrationActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Registration);
