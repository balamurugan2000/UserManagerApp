import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../Store';
const initialState = {
  userList: [],
};

const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUserList: (state, action: PayloadAction<any>) => {
      state.userList = action?.payload;
    },
    setMergeUserList: (state, action: PayloadAction<any>) => {
      const newUsers = action.payload || [];
      const merged = [...state.userList, ...newUsers];
      const uniqueUsers: any = Array.from(
        new Map(merged.map(user => [user.id, user])).values(),
      );
      state.userList = uniqueUsers;
    },
    updateUserList: (state, action: PayloadAction<any>) => {
      state.userList = action?.payload;
    },
  },
});
export const { setUserList,updateUserList,setMergeUserList } = UserSlice.actions;
export default UserSlice.reducer;
export const getUserListSelector = (state: RootState) => state.UserList;
