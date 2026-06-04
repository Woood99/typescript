import { Header, TanstackQueryWrapper } from '@/shared/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Tanstack Query',
};

const TanstackQueryLearningPage = () => {
   return (
      <main className="mb-6">
         <Header />
         <div className="container-desktop !mt-6">
            <TanstackQueryWrapper />
         </div>
      </main>
   );
};

export default TanstackQueryLearningPage;
