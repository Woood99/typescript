import { ReactNode } from 'react';
import { QueryProvider } from './QueryProvider';

export const AppProviders = ({ children }: { children: ReactNode }) => {
   return <QueryProvider>{children}</QueryProvider>;
};
