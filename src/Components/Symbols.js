import React from 'react'
import { useSelector } from 'react-redux'
import { selectDisplay } from '../redux/slices/displayCountrySlice'

const Symbols = () => {
  let currentDisplay = useSelector(selectDisplay)
  return (
    <div className="symbols">
      <div className="stack">
        <h2>Flag: </h2>
        <h3>{currentDisplay.name.common}</h3>
        {currentDisplay.flags ? (
          <img src={currentDisplay.flags.png} />
        ) : (
          'No image available'
        )}
      </div>
      <div className="stack">
        <h2>Coat of Arms:</h2>
        <h3>{currentDisplay.name.common}</h3>
        {currentDisplay.coatOfArms ? (
          <img src={currentDisplay.coatOfArms.png} />
        ) : (
          'No image available'
        )}
      </div>
    </div>
  )
}

export default Symbols
