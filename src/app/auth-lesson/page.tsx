import { AuthLessonWrapper } from '@/shared/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Авторизация и аутентификация',
};

const AuthLesson = () => {
   return (
      <main className="my-6">
         <div className="container-desktop">
            <AuthLessonWrapper />
         </div>
      </main>
   );
};

export default AuthLesson;
