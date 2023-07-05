import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectPotentials } from '../redux/slices/potentialCountriesSlice'
import { setDisplayCountry } from '../redux/slices/displayCountrySlice'

const OptionDisplay = () => {
  const dispatch = useDispatch()
  let currentPotentials = useSelector(selectPotentials)
  console.log('OptionDisplay currentPotentials:', currentPotentials)
  return (
    <div className="stack">
      {currentPotentials.map((e, i) => {
        return (
          <h2
            onClick={() => {
              dispatch(setDisplayCountry(currentPotentials[i]))
            }}
            key={e.name.official}
          >
            {e.name.common}
          </h2>
        )
      })}
    </div>
  )
}

export default OptionDisplay

