import { Button as AntButton, ButtonProps } from 'antd';
import classNames from 'classnames';
import styles from './styles.module.scss';

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <AntButton
      {...props}
      className={classNames(styles.button, className)}
    >
      {children}
    </AntButton>
  );
}

export { Button };
