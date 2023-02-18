import { createSlice } from '@reduxjs/toolkit';
import { deleteUsersThunk, getUsersThunk } from './users.thunk';

const initUsersState = {
  users: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState: initUsersState,
  extraReducers: builder =>
    builder
      .addCase(getUsersThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUsersThunk.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getUsersThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteUsersThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteUsersThunk.fulfilled, (state, { payload }) => {
        state.users = state.users.filter(user => user.id !== payload.id);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteUsersThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export const usersReducer = usersSlice.reducer;
