import React from 'react';
import prisma from '../../lib/prisma'
import Link from 'next/link';
export default async function Home() {

const posts = await prisma.post.findMany({})
  return (
    <div>

      {posts.length >0 ?(
        
        posts.map((post)=>
         
          (
          <div key={post.id} className='p-10'>
        
        <Link href={`/`} ></Link>    <div className='flex gap-10 '>   <div >{post.title}</div>
            <div className=''>{post.content}</div></div>
        
   
        


          </div>
        ))    ) : <p className='text-slate-500'>No posts available</p>  }
   
    </div>
  );
}
