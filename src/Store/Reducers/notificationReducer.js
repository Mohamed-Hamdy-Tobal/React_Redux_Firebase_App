// notificationsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    notifications: [],
    notiShow: false
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
    },
});

export const { addNotification, removeNotification, showNotification } = notificationsSlice.actions;
export default notificationsSlice.reducer;
