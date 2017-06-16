const currentquestion = (state=0, action) => {
  switch (action.type) {
    case 'SUBMIT_ANSWER':
      console.log("submit_answer _currentquestion");
      return state+1;
    case 'SKIP_QUESTION':
      console.log("skip_answer _currentquestion");
      return state+1;
    default:
      return state
  }
}

export default currentquestion
