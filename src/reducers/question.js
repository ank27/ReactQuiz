import {
  SET_QUESTION,
} from '../constant/ActionTypes'
import quizQuestions from '../api/questions_api'

const question = (state=quizQuestions, action) => {
  switch (action.type) {
    case 'QUIZ_COMPLETE':
    case 'SUBMIT_ANSWER':
      return {...state, questions : state.questions.map((question) => question.id===action.payload.question_id ? {...question, isSubmitted:true} : question)}
    default:
      return state
  }
}

export default question
