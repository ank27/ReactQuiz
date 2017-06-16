import React from 'react';
export const onChange = (question_id,answer_id,isMultiple) =>({
    type : 'SET_ANSWER',
    payload : {
      question_id,
      answer_id,
      isMultiple
    }
})

export const onSubmitClick =(question_id, correct_choices) => ({
  type : 'SUBMIT_ANSWER',
  payload : {
    question_id,
    correct_choices
  }
})

export const onSkipClick = (question_id) => ({
  type : 'SKIP_QUESTION',
  payload :{
    question_id,
  }
})

export const onQuizComplete = (question_id,correct_choices) => ({
  type : 'QUIZ_COMPLETE',
  payload :{
    question_id,
    correct_choices
  }
})

export const onCategorySelect = (category_id) =>({
  type : 'CATEGORY_SELECT',
  payload :{
    category_id
  }
})
