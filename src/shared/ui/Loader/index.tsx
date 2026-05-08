import { cn } from '@/shared/lib';

interface Props {
   className?: string;
}

const Loader = ({ className }: Props) => {
   return <div className={cn('animate-pulse', className)}>Loading...</div>;
};

export default Loader;
