import react from 'react'
import Pageroute from './Route/Pageroute'
import "./Styles/Main.css"

function App() {
 
  return (
    <div>
      <div className='mobile-site'>
           <Pageroute/>
      </div>
      
       
      <div className='other-warning'>THIS SITE IS NOT RESPONSIVE FOR THIS SCREEN SIZE.</div>
      
    </div>
        
  )
}

export default App
