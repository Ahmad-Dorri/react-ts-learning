import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import RootState from './types';
const initialState: RootState['todo'] = {
  items: [],
};
interface todoItem {
  id: string;
  text: string;
}
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addToItems(state, action: PayloadAction<string>) {
      const inputTodo: todoItem = {
        id: new Date().toISOString(),
        text: action.payload,
      };
      state.items.push(inputTodo);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items.filter((item) => item.id !== action.payload);
    },
  },
});
export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
