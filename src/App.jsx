
import './App.css'
import ConnectivCard from './Components/ConnectivCard'
import Designed from './Components/Designed'
import Footer from './Components/Footer'
import Hero from './Components/Hero/Hero'
import Hood from './Components/Hood/Hood'
import Navbar from './Components/Navbar'
import Navigat from './Components/Navigat'
import Proctive from './Components/Proctive'
import Put from './Components/Put'
import Trusted from './Components/Trusted'

function App() {

  return (
    <div className=''>
      <Navbar></Navbar>
      <Hero/>
      <Proctive/>
      <ConnectivCard/>
      <Designed/>
      <Navigat/>
      <Trusted/>
      <Hood/>
      <Put/>
      <Footer/>
    </div>
  )
}

export default App
