import { Checkbox } from 'antd';

interface TodoPointProps {
  title: string,
  isActive: boolean,
}

function TodoPoint({ title, isActive }: TodoPointProps) {
  return (
    <div
      className="todo-point"
    >
      <Checkbox type="checkbox" checked={isActive} />
      <h3>{title}</h3>
    </div>
  );
}

export { TodoPoint };