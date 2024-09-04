import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './GlobalStyles.js'
import App from "./App.jsx"
import Footer from './components/Fotter.jsx'
import Sobre from "./pages/Sobre"
import Contato from "./components/Contato.jsx"
import TestimonialsSection from './components/TestimonialsSection.jsx'
import Sidebar from './components/SideBar.jsx'
import Skills from './components/Skills.jsx'
import ContactPort from "./components/ContactPort.jsx"
import SobreMim from "./components/SobreMim.jsx"
import About from "./components/About.jsx"
import Projects from './components/Projects.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <GlobalStyle/>
    <SobreMim/>
    
  </React.StrictMode>,
)
