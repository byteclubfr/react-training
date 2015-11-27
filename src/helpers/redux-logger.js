import createLogger from 'redux-logger'

export default () => {
  if (typeof createLogger === 'function' && typeof window !== 'undefined') {
    // Module not ignored, and client-side: OK
    return createLogger()
  } else {
    // Return a "no-op" middleware
    return () => (next) => (action) => next(action)
  }
}
