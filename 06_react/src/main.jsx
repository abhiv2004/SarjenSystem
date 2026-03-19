import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import EventDemo from './EventDemo.jsx'
import LifeCycle from './LifeCycle.jsx'
import SignupForm from './SignupForm.jsx'
import Demo from './demo.jsx'


createRoot(document.getElementById('root')).render(
 // <StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  //</StrictMode>,
)