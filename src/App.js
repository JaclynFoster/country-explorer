import './App.css'
import Header from './Components/Header'
import MainDisplay from './Components/MainDisplay'
import OptionDisplay from './Components/OptionDisplay'
import { selectDisplay } from './redux/slices/displayCountrySlice'
import { selectPotentials } from './redux/slices/potentialCountriesSlice'
import { useSelector } from 'react-redux/es/hooks/useSelector'

function App () {
  let potentials = useSelector(selectPotentials)
  console.log('App potentials:', potentials)
  let currentDisplay = useSelector(selectDisplay)
  console.log('App currentDisplay:', currentDisplay)
  return (
    <div className="App font-link">
      <Header />
      {currentDisplay ? <MainDisplay /> : <OptionDisplay />}
    </div>
  )
}

export default App



