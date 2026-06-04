import { TypeScriptData } from '../data';
import AccordionBlocks from '../ui/AccordionBlocks';

const TypeScriptWrapper = () => {
   return (
      <div className="flex flex-col gap-12">
         <section>
            <h2 className="max-md:px-4">
               Typescript - язык со статической типизацией, который по умолчанию использует строгую типизацию, но предоставляет ослаблять её когда
               необходимо (например any).
            </h2>
            <div className="flex flex-col gap-4">
               <AccordionBlocks data={TypeScriptData} /> 
            </div>
         </section>
      </div>
   );
};

export default TypeScriptWrapper;
