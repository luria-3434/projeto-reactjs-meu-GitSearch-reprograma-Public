import './App.css'
import Bio from './componentes/Bio'
import Footer from './componentes/Footer'
import {Search} from './componentes/Search'

function App() {

  return (
    <div className="App">
      <Bio/>
      <Search/>
      <Footer text="Luria Lopes"/>
    </div>
  )
}

export default App
