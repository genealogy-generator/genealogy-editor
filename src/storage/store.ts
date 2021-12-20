import { configureStore } from '@reduxjs/toolkit'
import { treeReducer } from './reducers/treeReducer';
import {treeDefaultReducer} from "./reducers/treeDefaultReducer";


export const store = configureStore({
    reducer:{
        //tree:treeReducer
        tree: treeDefaultReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch