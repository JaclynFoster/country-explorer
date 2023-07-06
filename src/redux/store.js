import { configureStore } from '@reduxjs/toolkit'
import potentialCountriesReducer from '../redux/slices/potentialCountriesSlice'
import displayedCountryReducer from '../redux/slices/displayCountrySlice'
import displayModalReducer from '../redux/slices/modalSlice'

export default configureStore({
  reducer: {
    potentialCountries: potentialCountriesReducer,
    displayedCountry: displayedCountryReducer,
    displayModal: displayModalReducer
  }
})


