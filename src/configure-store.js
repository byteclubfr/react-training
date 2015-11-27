import { combineReducers, createStore, applyMiddleware } from 'redux'
import { ui, contacts } from './reducers'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from './helpers/redux-logger'


const reducer = combineReducers({ ui, contacts })

export default () => {
  const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware()
  )(createStore)

  return createStoreWithMiddleware(reducer)
}
