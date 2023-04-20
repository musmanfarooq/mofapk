const { createSlice } = require("@reduxjs/toolkit");

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    adduser(state, action) {
      state.user = action.payload;
    },
    removeuser: (state) => {
        state.user = null;
      },
  },
});

export const { adduser, removeuser } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;