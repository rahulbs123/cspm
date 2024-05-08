import { configureStore } from '@reduxjs/toolkit'
import darkModeReducer from './darkModeSlice'
import mainReducer from './mainSlice'

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    main: mainReducer,
  },
})

