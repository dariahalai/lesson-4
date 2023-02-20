import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63f38350de3a0b242b438ab9.mockapi.io';

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
 
export const fetchUser = createAsyncThunk(
  'users/getUser',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/users/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
); 

export const addUser = createAsyncThunk(
  'users/addUser',
  async ({user}, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/users/`,user);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
); 

export const updateUser = createAsyncThunk(
  'users/update',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.put('/users/'+user.id,user);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
); 