import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: "",
};

const userSlice = createSlice({
  name: 'users',
  initialState, // state
  reducers: {
    Login: (state, action) => {
      state.users = action.payload
    },
  },
});

export const UserDetails = (state) => state.users.users
export const { Login } = userSlice.actions;
export default userSlice.reducer;