import question from './question'
import answer from './answer'
import quizcomplete from './quizcomplete'
import currentquestion from './currentquestion'
import categories from './categories'
import { combineReducers } from 'redux'

export default combineReducers({
  currentquestion,
  question,
  answer,
  quizcomplete,
  categories
})
