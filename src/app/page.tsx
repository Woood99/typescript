import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
   title: 'Главная страница',
};

const Home = () => {
   return (
      <main className="my-6">
         <div className="container">
            <div className="flex flex-col gap-2">
               <Link href="/typescript" className="text-blue-500 font-medium">
                  TypeScript
               </Link>
            </div>
         </div>
      </main>
   );
};

export default Home;
