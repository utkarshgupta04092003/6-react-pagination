import React, { useEffect, useState } from 'react'

export default function Posts({posts, currentPage, postPerPage}) {

    const [currentPost, setCurrentPost] = useState([]);
    
    
    useEffect(() => {
        
        
        const modifyContent = ()=>{

            
            var arr = [];
            const startPageIndex = (currentPage*postPerPage);  
            const endPageIndex = (parseInt(startPageIndex)+parseInt(postPerPage));
            console.log('start page index',startPageIndex);
            console.log('end page index',endPageIndex);


            for(let i=startPageIndex;i<endPageIndex;i++){
                arr.push(posts[i]);
            }

            console.log('after page change use effect')
            setCurrentPost(arr);
            console.log('arr: ',arr);

        }
        modifyContent();
      
    }, [currentPage, postPerPage]);
    
  return currentPost.length==0 ? <h1>loading...</h1>:(
    <div className='w-1/2 m-auto border border-gray-500'>

        {currentPost.map((post, index)=>(
        <div className='border border-gray-400 p-1 pl-5' key={index}>
           {post?.id} - {post?.title}
        </div>
      ))}

    </div>
  )
}
