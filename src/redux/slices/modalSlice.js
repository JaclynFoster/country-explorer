import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false
}

export const displayModal = createSlice({
  name: 'displayModal',
  initialState,
  reducers: {
    setShowModal: state => {
      state.value = true
    },
    setCloseModal: state => {
      state.value = false
    },
    toggleModal: state => {
      state.value = !state.value
    }
  }
})

export const { setShowModal, setCloseModal, toggleModal } = displayModal.actions
export const selectModal = state => state.displayModal.value
export default displayModal.reducer

