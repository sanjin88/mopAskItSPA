import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import CreateQuestion from './create-question';
import * as QuestionsActions from '../actions/questions-actions';
import CreateReply from './create-reply';
import Moment from 'moment';

class Questions extends Component {
    componentWillMount() {
        this
            .props
            .action
            .getQuestions();
    }

    handleQuestionVote(questionId, voteValue) {
        this
            .props
            .action
            .vote(questionId, voteValue);
    }

    renderResponses(question) {
        if (question.response) {
            return question
                .response
                .map((res) => {
                    return (
                        <div className="card card card-outline-info card-info mb-3 response">
                            <span className="response-content">{res.content}</span>
                            <span className="response-author">by: {res.user.firstname}</span>
                            <span>{res.created_at}</span>
                        </div>
                    )
                });
        }
    }

    renderQuestions(questions) {

        let isLoggedin = localStorage.getItem('ask-it-token') || false;

        var questionsRendered = [];
        questions.forEach(function (element) {
            var question = element;
            question.upVotes = 0;
            question.downVotes = 0;
            if (element.votes) {
                element
                    .votes
                    .forEach(function (vote) {
                        if (vote.value == 1) {
                            question.upVotes++;
                        } else {
                            question.downVotes++;
                        }
                    }, this);
            }
            questionsRendered.push(question)
        }, this);
        return questionsRendered.map((question, idx) => {
            return (
                <div key={idx}>
                    <div className="card card card-outline-primary card-primary mb-3">
                        <div className="card-header">
                            {question.created_at}
                        </div>
                        <div className="card-block">
                            <h4 className="card-title">
                                <span>{question.content}</span>
                            </h4>
                            <p className="card-text">
                                <span className="question-author float-right">
                                    by: {question.user.firstname}</span>
                            </p>
                            <br/>
                            Votes:
                            <span>{question.votes
                                    ? question.votes.length
                                    : 0}</span>
                            {isLoggedin
                                ? <button
                                        className="btn btn-success float-right"
                                        onClick={() => this.handleQuestionVote(question.id, 1)}>UPVOTE ({question.upVotes})
                                    </button>
                                : ""}
                            {isLoggedin
                                ? <button
                                        className="btn btn-warning float-right"
                                        onClick={() => this.handleQuestionVote(question.id, 0)}>DOWNVOTE ({question.downVotes})</button>
                                : ""}

                        </div>
                        <br/>
                        <div className="card-footer text-muted">
                            {this.renderResponses(question)}
                            {isLoggedin
                                ? <CreateReply questionId={question.id}/>
                                : ""}
                        </div>
                    </div>
                </div>

            );
        })
    }

    render() {
        let isLoggedin = localStorage.getItem('ask-it-token') || false;
        return (
            <div className="questions">
                <h2>Questions:</h2>
                <div className="questions-list">
                    {this.renderQuestions(this.props.questions)}
                    {isLoggedin
                        ? <CreateQuestion/>
                        : ""}

                </div>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {questions: state.questions};
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(QuestionsActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Questions);
