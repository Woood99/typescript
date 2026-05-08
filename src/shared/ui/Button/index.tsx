import { cn } from '@/shared/lib';
import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
   children: React.ReactNode;
   className?: string;
   variant?: 'clear' | 'primary' | 'secondary';
   size?: 'default' | 'small';
}

const Button = (props: Props) => {
   const { children, className, variant = 'clear', size = 'default', ...otherProps } = props;

   return (
      <button className={cn(styles.button, styles[variant], styles[`size-${size}`], className)} {...otherProps}>
         {children}
      </button>
   );
};

export default Button;
