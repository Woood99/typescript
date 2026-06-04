import { TanstackQueryData } from '@/shared/data';
import Posts from './posts';
import { AccordionBlocks } from '@/shared/ui';

const TanstackQueryWrapper = () => {
   return (
      <div className="container-desktop">
         <div className="flex flex-col gap-12">
            <section>
               <div className="mb-8">
                  <Posts />
               </div>
               <div className="flex flex-col gap-4">
                  <AccordionBlocks data={TanstackQueryData} />
               </div>
            </section>
         </div>
      </div>
   );
};

export default TanstackQueryWrapper;
