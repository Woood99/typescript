import { TypeScriptWrapper } from '@/shared/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Typescript',
};

const TypescriptPage = () => {
   return (
      <main className="my-6">
         <div className="container-desktop">
            <TypeScriptWrapper />
         </div>
      </main>
   );
};

export default TypescriptPage;
