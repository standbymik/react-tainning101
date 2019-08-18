import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import topicReducer from './topicReducer'

const rootReducers = combineReducers({
    login: loginReducer,
    topic: topicReducer
})

export default rootReducers