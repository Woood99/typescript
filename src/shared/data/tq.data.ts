import { IAccordionBlocks } from '../ui/AccordionBlocks';

const TanstackQueryData: IAccordionBlocks[] = [
   {
      title: 'useQuery',
      codeBlocks: [
         {
            codeBlock: {
               title: 'Базовая реализация useQuery:',
               code: `const { data } = useQuery({
   queryKey: ['posts'],
   queryFn: () => getPosts(),
});`,
            },
         },
      ],
   },
];

export default TanstackQueryData;
