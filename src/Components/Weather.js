import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectDisplay } from '../redux/slices/displayCountrySlice'

const Weather = () => {
  const [weather, setWeather] = useState()
  let display = useSelector(selectDisplay)
  let latitude = display.capitalInfo.latlng[0]
  let longitude = display.capitalInfo.latlng[1]
  // ------------------------------------
  // PASTE RAPIDAPI CODE SNIPPET IN A USEEFFECT HERE
  // ------------------------------------
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: { q: `${latitude}, ${longitude}` },
      headers: {
        'X-RapidAPI-Key': '37e17d70a7msh94ffcedad0bcfebp1e8f7cjsn8b2e2d39b192',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    }
    axios
      .request(options)
      .then(res => {
        console.log(res.data)
        setWeather(res.data)
      })
      .catch(err => {
        console.log('error getWeather', err)
      })
  }, [])
  return (
    <div>
      <table className="overview-table">
        <tr>
          <th>Conditions: </th>
          <td>{weather?.current.condition.text}</td>
        </tr>
        <tr>
          <th>Temperature: </th>
          <td>{weather?.current.temp_f} degrees Fahrenheit</td>
        </tr>
        <tr>
          <th>Feels Like:</th>
          <td>{weather?.current.feelslike_f} degrees Fahrenheit</td>
        </tr>
        <tr>
          <th>Humidity: </th>
          <td>{weather?.current.humidity}%</td>
        </tr>
        <tr>
          <th>Wind Speed: </th>
          <td>{weather?.current.wind_mph} mph</td>
          <td>{weather?.current.wind_dir}</td>
        </tr>
      </table>
    </div>
  )
}


export default Weather;
