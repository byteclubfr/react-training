import { combineReducers, createStore, applyMiddleware } from 'redux'
import { ui, contacts } from './reducers'
import thunkMiddleware from 'redux-thunk'

const reducer = combineReducers({ ui, contacts })

// Export a function → no more singleton!
export default () => {
  const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)

  return createStoreWithMiddleware(reducer)
}
