import React from 'react'
import { selectDisplay } from '../redux/slices/displayCountrySlice'
import { useSelector } from 'react-redux'

const Overview = () => {
  let currentDisplay = useSelector(selectDisplay)
  return (
    <div className="stack">
      <h1>{currentDisplay.name.official}</h1>
      <h2>{currentDisplay.name.common}</h2>
      <table className="overview-table">
        <tr>
          <th>Population:</th>
          <td>{currentDisplay.population}</td>
        </tr>
        <tr>
          <th>Borders:</th>
          <td>
            {currentDisplay.borders.map(border => {
              return ` ${border} `
            })}
          </td>
        </tr>
        <tr>
          <th>Capital:</th>
          <td>
            {' '}
            {currentDisplay.capital.map(capital => {
              return `${capital}`
            })}
          </td>
        </tr>
        <tr>
          <th>Capital Location:</th>
          <td>
            {' '}
            {currentDisplay.capitalInfo.latlng[0]} /{' '}
            {currentDisplay.capitalInfo.latlng[1]}
          </td>
        </tr>
        <tr>
          <th>Car Side:</th>
          <td>{currentDisplay.car.side}</td>
        </tr>
        <tr>
          <th>Continents:</th>
          <td>{currentDisplay.continents}</td>
        </tr>
        <tr>
          <th>Independent:</th>
          <td>{currentDisplay.independent ? 'true' : 'false'}</td>
        </tr>
        <tr>
          <th>Landlocked:</th>
          <td>{currentDisplay.landlocked ? 'true' : 'false'}</td>
        </tr>
        <tr>
          <th>Member of UN:</th>
          <td>{currentDisplay.unMember ? 'true' : 'false'}</td>
        </tr>
        <tr>
          <th>Location:</th>
          <td>
            {currentDisplay.latlng[0]} / {currentDisplay.latlng[1]}
          </td>
        </tr>
        <tr>
          <th>Languages:</th>
          <td>{currentDisplay.languages.eng}</td>
        </tr>
        <tr>
          <th>Currencies:</th>
          <td>
            {currentDisplay.currencies.USD.symbol}{' '}
            {currentDisplay.currencies.USD.name}
          </td>
        </tr>
        <tr>
          <th>Maps:</th>
          <td>{currentDisplay.maps.googleMaps}</td>
        </tr>
        <tr>
          <th>Start of Week:</th>
          <td>{currentDisplay.startOfWeek}</td>
        </tr>
        <tr>
          <th>Subregion:</th>
          <td>{currentDisplay.subregion}</td>
        </tr>
      </table>
    </div>
  )
}

export default Overview

