import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import TodoClass from '../models/todo';
import { todoActions } from '../store/todo-slice';

const NewTodo: React.FC = () => {
  const inputTextRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const input = inputTextRef.current!.value;
    if (input.trim().length === 0) {
      //throw new error
      return;
    }
    dispatch(todoActions.addToItems(input));
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">todo:</label>
      <input id="text" type="text" ref={inputTextRef} />
      <button type="submit">submit</button>
    </form>
  );
};

export default NewTodo;
