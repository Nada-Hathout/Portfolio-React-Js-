import { Fragment } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Skilles from './components/Skilles'

import '@fortawesome/fontawesome-free/css/all.min.css';
import Projects from './components/Projects'

function App() {
  const ClickMe=()=>{
    alert( `${name}`)
  }
const name ='nada';
const users=["nada","salma","zeze"];
const isLogedIn=false;

  return (
    <Fragment>
      
  <div className='app-container'>
        <HeroSection />
       <Skilles />
       <Projectsjects />
       <Footer /> 
  </div>
    </Fragment>
  )
}

export default App
