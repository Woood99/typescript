'use client';

import { useIsFetching } from '@tanstack/react-query';
import Link from 'next/link';

const Header = () => {
   const isFetching = useIsFetching();

   return (
      <div className='relative'>
         {isFetching >0 && <div className="h-4 bg-red-500 w-full absolute top-0 left-0" />}

         <div className="p-4 bg-white">
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
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;
