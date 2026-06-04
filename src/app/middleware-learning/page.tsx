import { MiddlewareWrapper } from '@/shared/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Middleware',
};

const MiddlewareLearningPage = () => {
   return (
      <main className="my-6">
         <div className="container-desktop">
            <MiddlewareWrapper />
         </div>
      </main>
   );
};

export default MiddlewareLearningPage;
