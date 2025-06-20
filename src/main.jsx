import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ReelsProvider} from './context/ReelsContext.jsx'

createRoot(document.getElementById('root')).render(
  <ReelsProvider>
    <App />
  </ReelsProvider>
)
