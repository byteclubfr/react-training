import React from 'react' // required for JSX
import { render } from 'react-dom'
import App from '../components/App'
import { Provider } from 'react-redux'
import configureStore from '../configure-store'
import { fetchContacts } from '../actions/contacts'
import * as api from './api'


const store = configureStore(window.APP_STATE)

//store.dispatch(fetchContacts(api))

const root = <Provider store={ store }><App /></Provider>
render(root, document.getElementById('app'))
