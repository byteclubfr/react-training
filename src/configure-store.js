import { combineReducers, createStore } from 'redux'
import { ui, contacts } from './reducers'

var reducer = combineReducers({ ui, contacts })

// Export a function → no more singleton!
export default () => createStore(reducer)
