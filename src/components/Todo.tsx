import TodoClass from '../models/todo';
import TodoItem from './TodoItem';

const Todo: React.FC<{ items: TodoClass[] }> = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </div>
  );
};

export default Todo;
