import Image from 'next/image';

import MiddlewareImage from '@/shared/assets/images/middleware.png';

const MiddlewareWrapper = () => {
   return (
      <div className="flex flex-col gap-12">
         <section>
            <h2 className="max-md:px-4">Middleware - это промежуточное звено между Клиентом и Сервером</h2>
            <div className="flex flex-col gap-4">
               <p>Прежде чем запрос попадёт в функцию он пройдёт по цепочке функций middleware</p>
               <ul className="flex flex-col gap-1">
                  <li>Клиент отправляет запрос на сервер</li>
                  <li>Middleware перехватывает запрос и выполняет свою логику</li>
                  <li>Выполняется основной запрос</li>
                  <li>Сервер возвращает ответ</li>
               </ul>
               <p className="mt-2">
                  <Image src={MiddlewareImage} alt="" />
               </p>
            </div>
         </section>
      </div>
   );
};

export default MiddlewareWrapper;
