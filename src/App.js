import './App.css'
import Header from './Components/Header'
import MainDisplay from './Components/MainDisplay'
import OptionDisplay from './Components/OptionDisplay'
import Modal from './Components/Modal'
import { selectDisplay } from './redux/slices/displayCountrySlice'
import { selectPotentials } from './redux/slices/potentialCountriesSlice'
import { selectModal } from './redux/slices/modalSlice'
import { useSelector } from 'react-redux'

function App () {
  let potentials = useSelector(selectPotentials)
  console.log('App potentials:', potentials)
  let currentDisplay = useSelector(selectDisplay)
  console.log('App currentDisplay:', currentDisplay)
  let modal = useSelector(selectModal)
  return (
    <div className="App font-link">
      <Header />
      {currentDisplay ? <MainDisplay /> : <OptionDisplay />}
      {modal && <Modal />}
    </div>
  )
}

export default App




