import TodoClass from '../models/todo';

// types.ts
interface todoState {
  items: TodoClass[];
}

interface RootState {
  todo: todoState;
}

export default RootState;
