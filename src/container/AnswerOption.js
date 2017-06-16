import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Card,CardHeader,CardText ,CardActions, RaisedButton, Checkbox, RadioButtonGroup, RadioButton} from 'material-ui'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { onChange,onSubmitClick,onSkipClick,onQuizComplete } from '../actions'
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import '../components/Quiz/Quiz.css'

const AnswerOption = ({question,options,isMultiple,question_id,correct_choices,onSubmitClick,quizcomplete,onSkipClick,onChange,currentquestion,question_count,onQuizComplete}) => {
  const lists = options.map((option,index) =>{
      if(isMultiple){
        return (
        <li key={option.id}>
          <Checkbox
            key={option.id}
            label={option.text} onClick={()=> onChange(question_id,option.id,isMultiple)}/>
        </li>
      )}
      else{
        return(
        <RadioButton key={option.id}
            value={option.text}
            label={option.text} onClick={()=> onChange(question_id,option.id,isMultiple)} />
          )
        }
});

  if(!quizcomplete){
    if (isMultiple) {
      return (
        <div className="button-div">
          <ul>{lists}</ul>
          <RaisedButton primary={true} style={{fontSize :'13px', margin:'10px'}} className="submit-button" onClick={() => {(currentquestion < (question_count-1)) ?  onSubmitClick(question_id,correct_choices) : onQuizComplete(question_id,correct_choices)}} label="Submit"></RaisedButton>
          {(currentquestion < (question_count-1)) ? (<RaisedButton primary={true} style={{fontSize :'13px', margin:'10px'}} onClick={() => onSkipClick(question_id)} className="skip-button" label="Skip"></RaisedButton>): null}
        </div>
      )
    }else{
      return (
        <div className="button-div">
          <RadioButtonGroup  name="options" className="Question-answers" >
          {lists}
          </RadioButtonGroup>
          <RaisedButton primary={true} style={{fontSize :'13px', margin:'10px'}} className="submit-button" onClick={() => {(currentquestion < (question_count-1)) ?  onSubmitClick(question_id,correct_choices) : onQuizComplete(question_id,correct_choices)}} label="Submit"></RaisedButton>
          {(currentquestion < (question_count-1)) ? (<RaisedButton primary={true} style={{fontSize :'13px', margin:'10px'}} onClick={() => onSkipClick(question_id)} className="skip-button" label="Skip"></RaisedButton>): null}
        </div>
      )
     }
  }else {
    return null
  }

}


const mapStateProps = (state) => {
  return{
    question  : state.question.questions[state.currentquestion],
    options  : state.question.questions[state.currentquestion].options,
    isMultiple : state.question.questions[state.currentquestion].isMultiple,
    question_id : state.question.questions[state.currentquestion].id,
    currentquestion : state.currentquestion,
    question_count : state.question.questions.length,
    correct_choices : state.question.questions[state.currentquestion].correct_choices,
    quizcomplete: state.quizcomplete
  }
}

const mapDispatchProps = (dispatch) =>{
  return{
    onSubmitClick: (question_id,correct_choices)  => dispatch(onSubmitClick(question_id,correct_choices)),
    onSkipClick: (question_id)  => dispatch(onSkipClick(question_id)),
    onChange : (question_id,answer_id,isMultiple) => dispatch(onChange(question_id,answer_id,isMultiple)),
    onQuizComplete : (question_id,correct_choices) => dispatch(onQuizComplete(question_id,correct_choices))
  }
}

const answerOption  = connect(mapStateProps,mapDispatchProps)(AnswerOption)

AnswerOption.propTypes = {
  question : PropTypes.object,
  options : PropTypes.array,
  isMultiple : PropTypes.bool,
  correct_choices : PropTypes.array
}

AnswerOption.contextTypes={
  store : React.PropTypes.object,
}

export default answerOption
