import { configureStore } from '@reduxjs/toolkit'
import authReducer from './Reducers/authReducer'
import projectReducer from './Reducers/projectReducer'
import notificationReducer from './Reducers/notificationReducer'

export const store = configureStore({
    reducer: {
        authRed: authReducer,
        projectRed: projectReducer,
        notificationsRed: notificationReducer,
    },
})