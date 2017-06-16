import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../components/Quiz/Quiz.css'


const Question = ({ question,quizcomplete }) => {
  if(!quizcomplete){
    return (
      <div className="div_question">{question}</div>
    )
  }else {
    return null
  }
}

const stateProps = (state) => {
  return{
    question : state.question.questions[state.currentquestion].title,
    quizcomplete: state.quizcomplete
  }
}

const question = connect(stateProps,null)(Question)

Question.propTypes = {
  question : PropTypes.string,
}

export default question
