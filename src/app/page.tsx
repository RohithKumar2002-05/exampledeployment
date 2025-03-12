import React from 'react';
import prisma from '../../lib/prisma';
import Link from 'next/link';
export default async function Home() {

const posts = await prisma.post.findMany({})
  return (
    <div className="flex items-center justify-center">

      {posts.length >0 ?(
        
        posts.map((post)=>
         
          (
          <div key={post.id} className='border-b max-w flex items-center'>
              <Link href={`/${post.id}`} className='text-blue'>        <p>{post.title}</p></Link>
           
            <p>{post.content}</p>
          


          </div>
        ))    ) : <p className='text-slate-500'>No posts available</p>  }
   
    </div>
  );
}
