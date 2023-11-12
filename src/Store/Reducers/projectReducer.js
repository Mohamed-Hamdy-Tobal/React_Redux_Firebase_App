import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../../Firebase/firebase';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    loading: false, 
    error: null,
    projects: []
}


// The Action To Fetch Data
export const fetchData = createAsyncThunk(
    "projects/fetchData",
    async (_, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            const querySnapshot = await getDocs(collection(db, "projects"));
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
        const {rejectWithValue} = thunkAPI;
        try {
            const uniqueId = uuidv4();
            const createdAt = new Date();

            const formattedDate = createdAt.toLocaleString('en-US', {
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
                year: 'numeric'
            });

            await setDoc(doc(db, "projects", uniqueId), {
                ...itemStore,
                id: uniqueId, 
                createdAt: formattedDate
            });
            return itemStore;
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
        console.log(action.payload)
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
                console.log('fulfilled : ', action.payload)
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
                console.log('fulfilled Add: ', action.payload)
            })
            .addCase(addProject.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                console.log(action.payload)
            });
        },
})

// Action creators are generated for each case reducer function
export const { addData } = projectReducer.actions

export default projectReducer.reducer