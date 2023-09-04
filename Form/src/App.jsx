import './App.css'
import { Controlled } from './components/Controlled/Controlled'
import { Uncontrolled } from './components/Uncontrolled/Uncontrolled'

function App() {
 

  return (
    <>
      <section>
        <h1>Controlled input</h1>
        <Controlled/>
      </section>
      <section>
        <h1>Uncontrolled input:</h1>
        {/* <Uncontrolled/> */}
      </section>
      
    </>
  )
}

export default App
