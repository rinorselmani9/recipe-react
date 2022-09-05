import {createSlice} from '@reduxjs/toolkit'

const data = localStorage.getItem('jwt') ? JSON.parse(localStorage.getItem('jwt')) : null 

const initialState = {
    data
}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        login:(state, action) => {
            localStorage.setItem('jwt', JSON.stringify(action.payload))
            state.data = action.payload
        },
        logout: (state) => {
            localStorage.removeItem('jwt')
            state.data = null
        }
    }
})

export const { login, logout} = authSlice.actions
export default authSlice.reducer