import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as ProfileActions from '../actions/profile-actions';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        this
            .props
            .action
            .getUserData();
    }

    render() {
        return (
            <div className="profile">
                <h2>My Profile:</h2>
                <div className="profile-info">
                    <div class="well well-sm">
                        <div>First Name: {this.props.user.firstname}
                        </div>
                        <div>Last Name: {this.props.user.lastname}
                        </div>
                        <div>Email: {this.props.user.email}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {user: state.user};
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(ProfileActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
