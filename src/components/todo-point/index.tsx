import { Checkbox } from 'antd';
import classNames from 'classnames';

interface TodoPointProps {
  title: string,
  status: boolean,
}

function TodoPoint({ title, status }: TodoPointProps) {
  return (
    <div
      className={classNames("todo-point", !status && "active")}
    >
      <Checkbox type="checkbox" checked={status} />
      <span>{title}</span>
    </div>
  );
}

export { TodoPoint };
