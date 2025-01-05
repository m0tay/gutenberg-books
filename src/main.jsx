import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { StrictMode } from 'react'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <App />
        </Router>
    </StrictMode>
)
