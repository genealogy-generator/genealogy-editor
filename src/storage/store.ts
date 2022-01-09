import { configureStore } from '@reduxjs/toolkit'

import { applicationReducer } from './reducers/applicationReducer';
import { characterReducer } from './reducers/characterReducer';
import { linksReducer } from './reducers/linkReducer';


export const store = configureStore({
    reducer:{

        links:linksReducer,
        characters:characterReducer,
        app:applicationReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch