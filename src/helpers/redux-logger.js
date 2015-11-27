import createLogger from 'redux-logger'

export default () => {
  if (typeof createLogger === 'function') {
    // Module not ignored: OK
    return createLogger()
  } else {
    // Return a "no-op" middleware
    return () => (next) => (action) => next(action)
  }
}
