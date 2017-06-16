import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../components/Quiz/Quiz.css'

const QuestionCount = ({currentquestion,questionTotal,isMultiple,quizcomplete}) => {
  if (!quizcomplete) {
    return (
      <div className="count_div">
        {isMultiple ? <div className="multiple_div">[Pick Multiple choices]</div> : <div className="multiple_div">[Pick one of the choices]</div>}
        <p>Question <span>{currentquestion + 1}</span> of <span>{questionTotal}</span></p>
      </div>
    )
  }else{
    return null
  }

}

QuestionCount.propTypes = {
  currentquestion : PropTypes.number,
  questionTotal: PropTypes.number,
  isMultiple : PropTypes.bool
}

const stateProps = (state) => {
  return {
      currentquestion : state.currentquestion,
      questionTotal : state.question.questions.length,
      isMultiple : state.question.questions[state.currentquestion].isMultiple,
      quizcomplete: state.quizcomplete
  }
}
const questionCount =  connect(stateProps,null)(QuestionCount)

export default questionCount;
