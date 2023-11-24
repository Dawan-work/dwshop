import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import { counterReducer } from "./counter"
import {logger} from "redux-logger"

const middlewares = [logger]
const composedEnhancers = compose(applyMiddleware(...middlewares))

// les reducers
const rootReducer = combineReducers({
     counter: counterReducer
})
export const store = createStore(rootReducer, composedEnhancers)