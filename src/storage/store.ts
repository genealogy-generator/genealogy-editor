import { configureStore } from '@reduxjs/toolkit'
import { characterReducer } from './reducers/characterReducer';
import { linksReducer } from './reducers/linkReducer';


export const store = configureStore({
    reducer:{
        links:linksReducer,
        characters:characterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch