import React from 'react';
import prisma from '../../lib/prisma'

export default async function Home() {

const posts = await prisma.post.findMany({})
  return (
    <div className="flex items-center justify-center">

      {posts.length >0 ?(
        
        posts.map((post)=>
         
          (
          <div key={post.id} className='border-b max-w flex-col items-center'>
        

           <div >{post.title}</div>
           <div className=''>{post.content}</div>
   
        


          </div>
        ))    ) : <p className='text-slate-500'>No posts available</p>  }
   
    </div>
  );
}
