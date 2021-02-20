import React from 'react'
import ReactDOM from 'react-dom'
import {SpeechProvider} from '@speechly/react-client'
import './index.css'
import App from './App'
import {Provider} from './context/context'

ReactDOM.render(
    <SpeechProvider appId='fdcdb3dd-1587-4951-9abf-072ecdba9dc8' lenguage='en-US'>
     <Provider>
        <App />
    </Provider>   
    </SpeechProvider>,
document.getElementById('root'))