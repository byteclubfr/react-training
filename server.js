import express from 'express'
import connectLivereload from 'connect-livereload'
import renderApp from './src/server/render-app'
import { getContacts, getContact } from './src/server/get-contacts'


const app = express()

// In production, we don't enable static server or live-reload
if (app.get('env') !== 'production') {
  const PUBLIC_DIR = __dirname + '/static'
  // Static files server
  app.use(express.static(PUBLIC_DIR, {
    index: false
  }))
  // Inject livereload client script
  app.use(connectLivereload({
    port: process.env.npm_package_config_LR_PORT,
    ignore: [/\/app\.js$/] // Ignore built app.js, which is handled by hot reload with watchify
  }))
}

// API
app.get('/api/contacts.json', getContacts)
app.get('/api/contacts/:id.json', getContact)

// Catch-all = render React app
app.get('/*', renderApp)

// Listen
app.listen(process.env.PORT || 3000, function () {
  const webPort = this.address().port
  console.log('Web server ready, port %s', webPort)
})
