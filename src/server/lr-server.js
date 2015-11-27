// I have to create a dedicated module because the "--ignore" CLI option
// of livereload is buggy and won't allow me to exclude our built app.js
// We definitely want to exclude it from live reload, because it's already
// handled by watchify -p livereactload

import livereload from 'livereload'

const PUBLIC_DIR = __dirname + '/../../static'

// Watch files and start a livereload server
const lrServer = livereload.createServer({
  // Read port from package.json's config
  port: process.env.npm_package_config_LR_PORT,
  exclusions: [/app\.js/]
})

lrServer.watch(PUBLIC_DIR)

lrServer.server.on('listening', function () {
  const lrPort = this._server.address().port
  console.log('LiveReload server ready, port %s', lrPort)
})
