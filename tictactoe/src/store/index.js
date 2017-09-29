import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import apiReducer from '../reducers/apiReducer'

const rootReducer = combineReducers({
  api: apiReducer
})

const middleware = applyMiddleware(thunk)
const store = createStore(rootReducer, middleware)

export default store