import { Input } from 'antd';
import { Button } from '../components/button';
import { TodoPoint } from '../components/todo-point';
import todos from '../data/todo.json';
import { useMemo } from 'react';

function TodoListPage() {
  const completedNum = useMemo(() => todos.filter(todo => todo.status).length, [todos]);

  return (
    <div className="container">
      <div className="content">
        <h1>TO-DO LIST</h1>
        <div className="create-todo-panel">
          <Input />
          <Button>+</Button>
        </div>

        {todos.map(({id, title, status}) => (
          <TodoPoint key={id} title={title} status={status} />
        ))}

        <div className="progress-bar-container">
          <span className="progress-text">{`${completedNum} / ${todos.length} completed`}</span>
          <span className="progress-bar" style={{ width: `${(completedNum / todos.length) * 100}%` }} />
        </div>
      </div>
    </div>
  );
}

export default TodoListPage;
