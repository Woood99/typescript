import { AuthLessonData } from '@/shared/data';
import { AccordionBlocks } from '@/shared/ui';

const AuthLessonWrapper = () => {
   return (
      <div className="flex flex-col gap-12">
         <section>
            <div className="flex flex-col gap-4">
               <AccordionBlocks data={AuthLessonData} />
            </div>
         </section>
      </div>
   );
};

export default AuthLessonWrapper;
