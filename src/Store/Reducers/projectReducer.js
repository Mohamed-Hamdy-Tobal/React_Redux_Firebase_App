import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, setDoc } from 'firebase/firestore';
import { db } from '../../Firebase/firebase';
import { v4 as uuidv4 } from 'uuid';
// import moment from 'moment';

const initialState = {
    loading: false, 
    error: null,
    projects: [],
    singlePro: {}
}


// The Action To Fetch Data
export const fetchData = createAsyncThunk(
    "projects/fetchData",
    async (_, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            const q = query(collection(db, 'projects'), orderBy('createdAt', 'desc'));
            const querySnapshot = await getDocs(q);
            let data = []
            querySnapshot.forEach((doc) => {
                data.push({...doc.data(), ...{id:doc.id}})
            });
            return data
        } catch (error){
            return rejectWithValue(error.message)
        }   
    }
)

// The Action To Add Data
export const addProject = createAsyncThunk(
    "projects/addProject",
    async (itemStore, thunkAPI) => {
        const {rejectWithValue, getState} = thunkAPI;
        try {
            const uniqueId = uuidv4();
            const currentDate = new Date();
            const createdAt = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()} at ${currentDate.getHours() % 12 || 12}:${(currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes()} ${currentDate.getHours() < 12 ? 'AM' : 'PM'}`;

            await setDoc(doc(db, "projects", uniqueId), {
                ...itemStore,
                id: uniqueId, 
                createdAt: createdAt,
                authorFirstName: getState().authRed.currentUser.fname,
                authorLastName: getState().authRed.currentUser.lname
            });
            return itemStore;
        } catch (error){
            return rejectWithValue(error.message)
        }   
    }
)

// To Get Single Item
export const fetchItemDetails = createAsyncThunk(
    'projects/fetchItemDetails',
    async (itemId, { rejectWithValue }) => {
        try {
            // Fetch item details from Firestore based on the itemId
            const docRef = doc(db, 'projects', itemId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const itemDetails = docSnap.data();
                return itemDetails;
            } else {
                throw new Error('Item not found');
            }
        } catch (error) {
            // Handle errors and provide an error message
            return rejectWithValue(error.message);
        }
    }
);

// The Action To Delete Data
export const deleteProject = createAsyncThunk(
    "projects/deleteProject",
    async (id, thunkAPI) => {
        const {dispatch} = thunkAPI
        const {rejectWithValue} = thunkAPI;
        try {
            await deleteDoc(doc(db, "projects", id));
            dispatch(fetchData())
            return id
        } catch (error){
            return rejectWithValue(error.message)
        }   
    }
)

export const projectReducer = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        addData: (state, action) => {
        state.projects.push(action.payload)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false
                state.projects = action.payload
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            
            // For Add Data
            .addCase(addProject.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(addProject.fulfilled, (state, action) => {
                state.loading = false
                state.projects.push(action.payload)
            })
            .addCase(addProject.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            // For Single Data
            .addCase(fetchItemDetails.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchItemDetails.fulfilled, (state, action) => {
                state.loading = false
                state.singlePro = action.payload
            })
            .addCase(fetchItemDetails.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            // For Delete Project
            .addCase(deleteProject.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(deleteProject.fulfilled, (state, action) => {
                state.loading = false
                state.singlePro = action.payload
            })
            .addCase(deleteProject.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
        },
})

// Action creators are generated for each case reducer function
export const { addData } = projectReducer.actions

export default projectReducer.reducer