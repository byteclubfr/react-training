import { combineReducers, createStore } from 'redux'
import reducer from './reducers'

// Export a function → no more singleton!
export default () => createStore(reducer)
