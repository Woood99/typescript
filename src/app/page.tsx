import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
   title: 'Главная страница',
};

const Home = () => {
   return (
      <main className="my-6">
         <div className="container">
            <div className="flex flex-col gap-3">
               <Link href="/typescript" className="text-blue-500 font-medium">
                  TypeScript
               </Link>
               <Link href="/middleware-learning" className="text-blue-500 font-medium">
                  Middleware
               </Link>
               <Link href="/tanstack-query" className="text-blue-500 font-medium">
                  Tanstack Query
               </Link>
               <Link href="/auth-lesson" className="text-blue-500 font-medium">
                  Авторизация и аутентификация
               </Link>
            </div>
         </div>
      </main>
   );
};

export default Home;
