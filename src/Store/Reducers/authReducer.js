import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../../Firebase/firebase';

const initialState = {
    loading: false, 
    error: null,
    currentUser: {},
}

// The Action To Sign Up
export const signUp = createAsyncThunk(
    "auth/signUp",
    async (user, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        const {email, password} = user
        try {
            createUserWithEmailAndPassword(auth,email, password)
            return user
        } catch (error){
            return rejectWithValue(error.message)
        }   
    }
)

// The Action To Sign In
export const signIN = createAsyncThunk(
    "auth/signIN",
    async (user, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        const {email, password} = user
        try {
            signInWithEmailAndPassword(auth, email, password)
            console.log(auth)
            return user
        } catch (error){
            return rejectWithValue(error.message)
        }   
    }
)
// The Action To LogOut
export const logOut = createAsyncThunk(
    "auth/logOut",
    async (_, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            signOut(auth)
        } catch (error){
            return rejectWithValue(error.message)
        }   
    }
)

export const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

        // For Sign Up
        .addCase(signUp.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(signUp.fulfilled, (state, action) => {
            state.loading = false
            state.currentUser = action.payload
            console.log('fulfilled SingUp: ', action.payload)
        })
        .addCase(signUp.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
        
        // For Sign In
        .addCase(signIN.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(signIN.fulfilled, (state, action) => {
            state.loading = false
            state.currentUser = action.payload
            console.log('fulfilled SingIN : ', action.payload)
        })
        .addCase(signIN.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
        
        // For LogOut
        .addCase(logOut.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(logOut.fulfilled, (state) => {
            state.loading = false
            state.currentUser = {}
            console.log('fulfilled logout: ', state.currentUser)
        })
        .addCase(logOut.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
        
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = authReducer.actions

export default authReducer.reducer