import { configureStore } from '@reduxjs/toolkit'
import { characterReducer } from './reducers/characterReducer';
import { treeReducer } from './reducers/treeReducer';


export const store = configureStore({
    reducer:{
        tree:treeReducer,
        characters:characterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch