import { Input } from 'antd';
import { Button } from '../components/button';
import { TodoPoint } from '../components/todo-point';

function TodoListPage() {
  return (
    <div className="container">
      <div className="content">
        <h1>LIST</h1>
        <Input />
        <Button>Button text</Button>
        <Button danger>Button text</Button>

        <TodoPoint title="Title" isActive={true} />
        <TodoPoint title="Title 2" isActive={false} />
        <TodoPoint title="Title 3" isActive={true} />
      </div>
    </div>
  );
}

export default TodoListPage;
