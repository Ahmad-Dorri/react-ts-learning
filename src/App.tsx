import Todo from './components/Todo';
import TodoClass from './models/todo';

function App() {
  const todos = [new TodoClass('react is good'), new TodoClass('type is bad')];
  return (
    <>
      <Todo items={todos} />
    </>
  );
}

export default App;
