import express from 'express'
import connectLivereload from 'connect-livereload'
import livereload from 'livereload'
import renderApp from './src/server/render-app'


const app = express()

// In production, we don't enable static server or live-reload
if (app.get('env') !== 'production') {
  const PUBLIC_DIR = __dirname + '/static'
  // Static files server
  app.use(express.static(PUBLIC_DIR, {
    index: false
  }))
  // Watch files and start a livereload server
  const lrServer = livereload.createServer({
    // Start on a random port affected by OS
    port: 0
  })
  lrServer.watch(PUBLIC_DIR)
  lrServer.server.on('listening', function () {
    const lrPort = this._server.address().port
    console.log('LiveReload server ready, port %s', lrPort)
    // Now add the livereload middleware injecting js client script automatically
    app.use(connectLivereload({
      port: lrPort,
      ignore: [/\/app\.js$/] // Ignore built app.js, which is handled by hot reload with watchify
    }))
    // And continue server's configuration
    serve()
  })
} else {
  // Continue directly to server's configuration
}

function serve () {
  // Catch-all = render React app
  app.get('/*', renderApp)

  // Listen
  app.listen(process.env.PORT || 3000, function () {
    const webPort = this.address().port
    console.log('Web server ready, port %s', webPort)
  })
}
