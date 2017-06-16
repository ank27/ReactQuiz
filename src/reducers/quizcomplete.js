const quizcomplete = (state=false, action) => {
  switch (action.type) {
    case 'QUIZ_COMPLETE':
      console.log("QUIZ_COMPLETE");
      state = true;
      return state;
    default:
      return state
  }
}

export default quizcomplete
