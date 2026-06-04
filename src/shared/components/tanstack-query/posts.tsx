'use client';

import { api } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';

type Post = {
   id: number;
   title: string;
};

const getPosts = () => {
   return api.get<Post[]>('/posts').then(res => res.data);
};

const Posts = () => {
   const { data } = useQuery({
      queryKey: ['posts'],
      queryFn: () => getPosts(),
   });

   return (
      <div>
         {data?.map(post => (
            <div key={post.id}>
               {post.id}. {post.title}
            </div>
         ))}
      </div>
   );
};

export default Posts;
