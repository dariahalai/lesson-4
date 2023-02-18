import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./users/users.slice";

export const store = configureStore({
devTools:true,
reducer:{
    users:usersReducer
}
})

