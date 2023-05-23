import { useSelector } from 'react-redux';
import RootState from '../store/types';
import TodoItem from './TodoItem';

const Todo: React.FC = () => {
  const items = useSelector((state: RootState) => state.todo.items);
  return (
    <div>
      {items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </div>
  );
};

export default Todo;
