import express from 'express'
import bodyParser from 'body-parser'
import connectLivereload from 'connect-livereload'
import renderApp from './src/server/render-app'
import { getContacts, getContact, postContact } from './src/server/routes-contacts'


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

// req.body
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// API
app.get('/api/contacts', getContacts)
app.post('/api/contacts', postContact)
app.get('/api/contacts/:id', getContact)

// Catch-all = render React app
app.get('/*', renderApp)

// Listen
app.listen(process.env.PORT || 3000, function () {
  const webPort = this.address().port
  console.log('Web server ready, port %s', webPort)
})
