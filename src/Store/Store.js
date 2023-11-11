import { configureStore } from '@reduxjs/toolkit'
import authReducer from './Reducers/authReducer'
import projectReducer from './Reducers/projectReducer'

export const store = configureStore({
    reducer: {
        authRed: authReducer,
        projectRed: projectReducer
    },
})