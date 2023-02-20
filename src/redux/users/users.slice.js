import { isAnyOf } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import {
  addUser,
  deleteUsersThunk,
  fetchUser,
  getUsersThunk,
  updateUser,
} from './users.thunk';

const initUsersState = {
  currentUser: null,
  users: [],
  isLoading: false,
  error: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState: initUsersState,
  extraReducers: builder =>
    builder
      .addCase(getUsersThunk.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.currentUser = null;
      })
      .addCase(deleteUsersThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteUsersThunk.fulfilled, (state, { payload }) => {
        state.users = state.users.filter(user => user.id !== payload.id);

        state.currentUser = null;
      })
      .addCase(fetchUser.fulfilled, (state, { payload }) => {
        state.currentUser = payload;
      })
      .addCase(addUser.fulfilled, (state, { payload }) => {
        state.users = [...state.users, payload];
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.users = state.users.map(user => {
          if (user.id === payload.id) {
            return payload;
          } else {
            return user;
          }
        });
        state.currentUser = payload;
      })

      .addMatcher(
        isAnyOf(
          getUsersThunk.pending,
          deleteUsersThunk.pending,
          fetchUser.pending,
          addUser.pending,
          updateUser.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
          state.currentUser = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getUsersThunk.rejected,
          deleteUsersThunk.rejected,
          fetchUser.rejected,
          addUser.rejected,
          updateUser.rejected
        ),
        state => {
          state.isLoading = false;
          state.error = true;
          state.currentUser = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getUsersThunk.fulfilled,
          deleteUsersThunk.fulfilled,
          fetchUser.fulfilled,
          addUser.fulfilled,
          updateUser.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.error = false;
        }
      ),
});

export const usersReducer = usersSlice.reducer;
