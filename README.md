# React training

Step 21: Data fetching

## Compatibility

Babel ensures full ES6 compatibility with all browsers

## Installation

```sh
npm install
```

## Development

```sh
npm run watch
```

* Browse to ``http://localhost:3000``
* Edit JS/CSS/HTML → Automatic reload

## Production

```sh
npm run build
```

Deploy.

## A few words about data fetching

We here face a real challenge. The goal is:

* Render a fully-loaded web page from server, which means data must be loaded server-side **before** rendering
* Still be able to use application client-side, so not disable client-side data-fetching
* But we don't want the preloaded data to be fetched again at first render

Let's think about what we need to achieve this goal:

* *Know **how** to load data*: this is the role of the store, we already have our dedicated actions for that and model consistency is ensured by reducers. So we need to be able to **dispatch actions**
* *Know **when** to load data*:
  * ``componentWillMount`` is not enough as component is not always unmounted/mounted when changing URL
  * **``componentWillUpdate``** would be a universal solution
  * route's **``onEnter``** hook may be a good lead to
* *Know **if** we must load data*:
  * server-side: we must always load, using server's ``api`` module
  * client-side: we must load it conditionnally, using client's ``api`` module:
    * not if data is already loaded (business-logic), we may need **app's state** for that
    * supposedly not at first rendering
* Server-side: *Know **when** data is loaded** to respond to client
  * Each async action must return a **Promise** to be *watchable*
  * We must keep track of **pending actions** to watch them all, and this queue cannot be global:
    * Attached to root component (via *context*)
    * Passed to the *loading* process
    * Embedded in app's state

So whatever we choose we need ``api``, ``dispatch`` and ``getState``, and the current component props and/or route params:

* ``redux-router`` triggers a ``ROUTER_DID_CHANGE`` action with a ``components`` property (giving access to props), we could listen to with a middleware (giving access to dispatch and getState). That would give access to all required information if we attach the data-fetching method as static method of route components. This is explored here: [erikras/react-redux-universal-hot-example](https://github.com/erikras/react-redux-universal-hot-example).
* We could also pass a data-fetching function to ``onEnter`` hook (giving access to route params) and inject store (giving access to dispatch and getState) during configuration. Less complete but simpler solution we're exploring right here.
  * A ``onEnter`` hook is a function ``(routerState) => any``
  * It should call a function of our own, which will need ``params`` + ``getState`` to check if data should be fetched, and then ``dispatch`` + ``params`` + ``getState`` to fetch data
  * It should also include queue management (injected on top)
  * Our *data loading* process could then be a function ``(api, pendingCallback, dispatch, getState, loader) => (routerState) => any``.
  * A *loader* will be a single function ``(api, dispatch, getState, routerState)`` returning a Promise, the queuing thing being handled by the data loading process.
  * So if we fix global parameters, we can have a bunch of route-specific *loaders* transformed into hook with our function ``(api, pendingCallback, dispatch, getState) => (loader) => (routerState) => any``, that should be a *nice final API*.
