import _ from 'lodash'
const answers = (state=[], action) => {
  switch (action.type) {
    case 'SET_ANSWER':
      if (state.length>0 && state.find((answer) => answer.question_id===action.payload.question_id)) {
        console.log("answer exist");
        if (action.payload.isMultiple) {
          return state.map(answer =>(answer.question_id === action.payload.question_id) ?
           {...answer, user_answers: (answer.user_answers.includes(action.payload.answer_id)) ?
             [answer.user_answers.splice(answer.user_answers.indexOf(action.payload.answer_id),1)] :
             [...answer.user_answers,action.payload.answer_id]} : answer)
        }else{
          return state.map(answer =>(answer.question_id === action.payload.question_id) ?
           {...answer, user_answers: [action.payload.answer_id]} : answer
        )
      }
      }else {
        console.log("answer not exist");
        return [...state,
            {
              question_id : action.payload.question_id,
              user_answers : [action.payload.answer_id]
            }
          ]
      }
    case 'QUIZ_COMPLETE':
    case 'SUBMIT_ANSWER':
      console.log("current_question="+action.payload.question_id);
      console.log("correct_choices ="+ action.payload.correct_choices);
      return state.map(function(answer){
        if (answer.question_id === action.payload.question_id) {
          if (_.isEqual(answer.user_answers, action.payload.correct_choices)) {
           return  {...answer, isAnswerCorrect : true}
          }else{
          return  {...answer, isAnswerCorrect : false}
          }
      }else{
        return answer
      }
    })
    default:
      return state
  }
}

export default answers
