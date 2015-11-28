# React training

Step 20: Routing

## Data fetching

We here face a real challenge. The goal is:

* Render a fully-loaded web page from server, which means data must be loaded server-side **before** rendering
* Still be able to use application client-side, so not disable client-side data-fetching
* But we don't want the preloaded data to be fetched again at first render

So… first naive solution is going step by step, with **``if``s** to fetch data only when required, playing with lifecycle methods and URL. This obviously can't go very far and already exposes a few flaws:

* Have to load client-side ``api`` module in shared modules ``ContactDetails`` and ``ContactList``
* Require specific tests at specific places
  * RegExp on URL in ``server.js``
  * Test (arguable) on length in ``ContactList#componentWillMount``
  * Test in ``ContactDetails#componentWillUpdate`` (because when changing URL component is not re-mounted, it's just receive props update).

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
