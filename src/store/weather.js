import {configureStore, createSlice} from '@reduxjs/toolkit'

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weather: '',
        city: '',
    },
    reducers: {
        setWeather(state, action){
            state.weather = action.payload;
        },
        setCity(state , action){
            state.city = action.payload;
        }
    }
    
});

export default configureStore ({
    reducer: {
        weather: weatherSlice.reducer,
    },
})

export const weatherAction = weatherSlice.actions;
