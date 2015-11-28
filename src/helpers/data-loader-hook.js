// Handle initial rendering status
const isServer = (typeof window === 'undefined') // I'm server-side: always enable data-loaders
const hasState = (!isServer && window.APP_STATE) // I'm client-side, and a state has been given to me by server: disable for now, enable ASAP
var enabled = isServer || !hasState // The data-loaders disabled for first rendering
setTimeout(() => enabled = true, 0) // Whatever happens, re-enable data-loading ASAP


export default function dataLoaderToHook (api, { dispatch, getState }, pendingCallback = noop) {
  return (loader, blocking) => (routerState, transition, next) => {
    if (!enabled) {
      return next()
    }
    const result = loader(api, dispatch, getState, routerState)
    if (result && typeof result.then === 'function') {
      // pending action
      pendingCallback(result)
      if (blocking) {
        result.then(() => next())
      } else {
        next()
      }
    } else {
      next()
    }
  }
}

function noop () {}
