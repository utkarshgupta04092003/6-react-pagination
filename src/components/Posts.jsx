import React, { useEffect, useState } from 'react'

export default function Posts({posts, currentPage, postPerPage}) {

    const [currentPost, setCurrentPost] = useState([]);
    
    
    useEffect(() => {
        
        
        const modifyContent = ()=>{

            
            var arr = [];
            const startPageIndex = (currentPage*postPerPage);  
            const endPageIndex = startPageIndex+postPerPage;
         
            for(let i=startPageIndex;i<(endPageIndex);i++){
                arr.push(posts[i]);
            }
    
            console.log('after page change use effect')
            setCurrentPost(arr);
            console.log('arr: ',arr);

        }
        modifyContent();
      
    }, [currentPage, postPerPage]);
    
  return currentPost.length==0 ? <h1>loading...</h1>:(
    <div>

        current page- {currentPage}
        {currentPost.map((post, index)=>(
        <div className='border border-gray-400' key={index}>
          - {post?.id} - {post?.title} - {index}
        </div>
      ))}

    </div>
  )
}
