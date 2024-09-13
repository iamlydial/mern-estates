import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Combine all reducers into a root reducer
const rootReducer = combineReducers({
  user: userReducer, // Add user slice reducer to the root reducer
});

// Configuration object for Redux Persist
const persistConfig = {
  key: "root", // Key to use for the persisted state in local storage
  storage, // Specify local storage as the storage mechanism
  version: 1, // Version number for schema changes in persisted state
};

// Create a persisted reducer using the persistConfig and rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store
export const store = configureStore({
  reducer: persistedReducer, // Use the persisted reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializableCheck to avoid issues with non-serializable data (e.g., Redux Persist)
    }),
});

// Create a persistor to handle the persistence and rehydration of the store
export const persistor = persistStore(store);