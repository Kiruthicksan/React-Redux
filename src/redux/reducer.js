import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  userList: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = { id: nanoid(), ...action.payload };
      state.userList.push(newUser);
    },
    updateUser: (state, action) => {
      const index = state.userList.findIndex(user => user.id === action.payload.id);
      if (index !== -1) {
        state.userList[index] = action.payload;
      }
    },
    deleteUser: (state, action) => {
      state.userList = state.userList.filter(user => user.id !== action.payload);
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
