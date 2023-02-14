<<<<<<< HEAD
import commentsReducer from "./comments";
import professionsReducer from "./professions";
=======
import { combineReducers, configureStore } from "@reduxjs/toolkit";
>>>>>>> 87a6102e1ff76dc4e54732422b48e929fa46d48f
import qualitiesReducer from "./qualities";
import professionsReducer from "./professions";
import usersReducer from "./users";
import commentsReducer from "./comments";

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
    qualities: qualitiesReducer,
    professions: professionsReducer,
    users: usersReducer,
    comments: commentsReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
