// notificationsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    notifications: [],
    notiShow: false,
    counter: 0
};

const notificationsSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        showNotification: (state) => {
        state.notiShow = !state.notiShow 
        },
        addNotification: (state, action) => {
        state.notifications.push(action.payload);
        },
        removeNotification: (state, action) => {
        state.notifications = state.notifications.filter(
            (notification) => notification.id !== action.payload
        );
        },
        counterIncrement : (state) => {
            state.counter += 1
        },
        counterDecrement : (state) => {
            state.counter = 0
        }
    },
});

export const { addNotification, removeNotification, showNotification, counterIncrement, counterDecrement } = notificationsSlice.actions;
export default notificationsSlice.reducer;
