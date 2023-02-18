import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63f0c8ce5b7cf4107e26c18b.mockapi.io';

export const getUsersThunk = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/users');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteUsersThunk = createAsyncThunk(
    'users/deleteUsers',
    async (id, { rejectWithValue }) => {
      try {
        const { data } = await axios.delete(`/users/${id}`);
        console.log(data)
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  