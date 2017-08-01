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
        debugger
        let question = this.state.textArea;
        this.props.action.createQuestion(question);
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

                Post a question:
                <textarea onChange={(e) => this.handleChange(e)}> </textarea>
                    <button type='submit'>Submit Question</button>
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
