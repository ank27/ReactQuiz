import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const QuizComplete = ({currentquestion,questionTotal,quizcomplete}) => {
  if(!quizcomplete){
    return (
      <div>
        <p>Question <span>{currentquestion + 1}</span> of <span>{questionTotal}</span></p>
      </div>
    )
  }else{
    return null
  }

}

QuestionCount.propTypes = {
  currentquestion : PropTypes.number,
  questionTotal: PropTypes.number
}

const stateProps = (state) => {
  return {
      currentquestion : state.currentquestion,
      questionTotal : state.question.questions.length,
      quizcomplete: state.quizcomplete
  }
}
const questionCount =  connect(stateProps,null)(QuestionCount)

export default questionCount;
