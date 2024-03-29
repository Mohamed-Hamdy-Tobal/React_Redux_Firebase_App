import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { browserLocalPersistence, createUserWithEmailAndPassword, setPersistence, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth, { db } from '../../Firebase/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
// import { v4 as uuidv4 } from 'uuid';

const storedUser = sessionStorage.getItem('user');
const initialState = {
    loading: false, 
    error: null,
    currentUser: storedUser ? JSON.parse(storedUser) : {},
    redirectPathAfterSignIn: null,
}

// The Action To Sign Up
export const signUp = createAsyncThunk(
    "auth/signUp",
    async (user, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        const {email, password, fname, lname} = user;

        try {
            // Create the user in Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            const uid = userCredential.user.uid;

            await setDoc(doc(db, "users", uid), {
                uid: uid,
                email,
                fname,
                lname,
            });

            return user;
        } catch (error){
            return rejectWithValue(error.message);
        }   
    }
);


// The Action To Sign In

export const signIN = createAsyncThunk(
    "auth/signIN",
    async (user, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;

        // Check if user is defined
        if (!user || !user.email || !user.password) {
            return rejectWithValue("Invalid user object");
        }

        const { email, password } = user;

        try {
            // Sign in with email and password
            const userCredential = await signInWithEmailAndPassword(auth, email, password);

            // Set persistence to LOCAL (or SESSION if you want to persist only for the current session)
            await setPersistence(auth, browserLocalPersistence);

            // Get the user's UID from the authentication result
            const uid = userCredential.user.uid;

            // To get fName and lName of User
            const docRef = doc(db, 'users', uid);
            const docSnap = await getDoc(docRef);

            const userDetails = docSnap.data();


            if (docSnap.exists()) {
                // You can return the user object with the UID here if needed
                return { ...user, uid, ...userDetails };
            } else {
                throw new Error('Item not found');
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


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
    reducers: {
        navigateAfterSignIn: (state, action) => {
            state.redirectPathAfterSignIn = action.payload;
        },
    },
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
            sessionStorage.setItem('user', JSON.stringify(action.payload));
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
            sessionStorage.setItem('user', JSON.stringify(action.payload));
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
            sessionStorage.removeItem('user');
        })
        .addCase(logOut.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
        
    }
})

// Action creators are generated for each case reducer function
export const { navigateAfterSignIn } = authReducer.actions

export default authReducer.reducer