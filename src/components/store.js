import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'
import Cookies from 'universal-cookie'
//import { getMemberIdfromtoken } from '../utilities'

const createReduxStore = (initialState, options) => {

    const store = createStore(
        reducers, 
        applyMiddleware(thunk)
    )

    return store
}

export default createReduxStore
