import { combineReducers } from 'redux'
import loginReducer from './loginReducer'

const rootReducers = combineReducers({
    login : loginReducer
})

export default rootReducers