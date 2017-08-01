import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import * as QuestionsActions from '../actions/questions-actions';

// class MyQuestions extends Component {
//     componentWillMount() {
//         this.props.action.getMyQuestions();
//     }

//     render() {
//         return (
//             <div className="my-questions">
//                 <h2>My Questions:</h2>
//                 <div className="my-questions-list">
//                     <div>My Questions: {this.props.myQuestions} </div>
//                 </div>

//             </div>
//         );
//     }
// }

// function mapStateToProps(state, props) {
//     return {
//         myQuestions: state.myQuestions
//     };
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         action: bindActionCreators(QuestionsActions, dispatch)
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(MyQuestions);





import CreateQuestion from './create-question';
import * as QuestionsActions from '../actions/questions-actions';
import CreateReply from './create-reply';

class MyQuestions extends Component {
    componentWillMount() {
         this.props.action.getMyQuestions();
    }

    handleQuestionVote(questionId, voteValue) {
        this.props.action.vote(questionId, voteValue);
    }

    renderResponses(question) {
        if (question.response) {
            return question.response.map((res) => {
                return (
                    <div> Response:<span>{res.content}</span> - <span>{res.user.firstname}</span></div>
                )
            });
        }
    }


    renderQuestions(questions) {
        return questions.map((question, idx) => {
            return <div key={idx}>
                     <span>{question.content}</span> - <span>{question.user.firstname}</span>
                     <span>{question.votes ? question.votes.length : 0}</span>
                    <button onClick={()=> this.handleQuestionVote(question.id, 1)}>UPVOTE </button>
                    <button onClick={()=> this.handleQuestionVote(question.id, 0)}>DOWNVOTE </button> 
                    {this.renderResponses(question)}
                    <CreateReply questionId={question.id} />
                 </div>
        })
    }

    render() {
        return (
            <div className="questions">
                <h2>My Questions:</h2>
                <div className="questions-list">
                    {this.renderQuestions(this.props.myQuestions)}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
          myQuestions: state.myQuestions
    };
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(QuestionsActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyQuestions);

