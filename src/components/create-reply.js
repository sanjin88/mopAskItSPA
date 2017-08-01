import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as QuestionsActions from '../actions/questions-actions';

class CreateQuestion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textArea: ''
        }
    }
    handleSubmit(e) {
        e.preventDefault();

        let reply = this.state.textArea;
        this.props.action.createReply(this.props.questionId, reply);
    }


    handleChange(e) {
        this.setState({
            textArea: e.target.value
        })
    }

    render() {
        return (
            <div className="questions">
                <form onSubmit={(e) => this.handleSubmit(e)}>

                Post a reply:
                <textarea onChange={(e) => this.handleChange(e)}> </textarea>
                    <button type='submit'>Submit Reply</button>
                </form>
            
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(QuestionsActions, dispatch)
    }
}
export default connect(null, mapDispatchToProps)(CreateQuestion);
