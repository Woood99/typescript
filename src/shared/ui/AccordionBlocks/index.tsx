'use client';

import { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { ConceptBlock } from '@/shared/ui';
import { cn } from '@/shared/lib';
import { IConceptBlock } from '../ConceptBlock';

export interface IAccordionBlocks {
   title: string;
   codeBlocks: IConceptBlock[];
}

const AccordionBlocks = ({ data }: { data: IAccordionBlocks[] }) => {
   const [openId, setOpenId] = useState<number | null>(null);
   const popupRef = useRef(null);

   return (
      <div className="flex flex-col gap-4">
         {data.map((item, index) => {
            const isActive = openId === index;

            return (
               <div key={index} className={cn('main-block-spoller', isActive && '_active')}>
                  <button
                     className={cn(
                        'w-full h-12 text-left bg-white text-black pl-4 rounded-xl text-base cursor-pointer transition-all',
                        isActive && '_active',
                     )}
                     onClick={() => setOpenId(isActive ? null : index)}>
                     {item.title}
                  </button>

                  <CSSTransition nodeRef={popupRef} in={isActive} classNames="_open-select" timeout={200} unmountOnExit>
                     <div ref={popupRef}>
                        {isActive && (
                           <div className="flex flex-col shadow-2xl bg-white rounded-b-xl">
                              {item.codeBlocks.map((block, blockIndex) => (
                                 <ConceptBlock
                                    key={blockIndex}
                                    className="!bg-none grow"
                                    title={
                                       block.title && {
                                          main: block.title.main,
                                          subtitle: block.title.subtitle,
                                       }
                                    }
                                    descr={block.descr}
                                    codeBlock={{
                                       title: block.codeBlock.title,
                                       code: block.codeBlock.code,
                                    }}
                                 />
                              ))}
                           </div>
                        )}
                     </div>
                  </CSSTransition>
               </div>
            );
         })}
      </div>
   );
};

export default AccordionBlocks;
