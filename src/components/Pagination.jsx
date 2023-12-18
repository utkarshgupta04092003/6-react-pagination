import React, { useEffect, useState } from 'react'

export default function Pagination({postPerPage, totalPost, setCurrentPage, paginate}) {

    const [pages, setPages] = useState(0);


    useEffect(() => {
        setPages(Math.ceil(totalPost/postPerPage));
    }, [postPerPage]);
    
  return (
    <div>


        post perpage - {postPerPage}
        total post - {totalPost}
        pages - {pages}


        <div className="flex justify-center self-center border border-red-500 w-[100%] my-5">

            {Array.from({ length: pages }).map((item,index)=>(
                <div className='flex border border-green-500 px-2 py-1'
                key={index}
                id={index}
                onClick={(e)=>{paginate(e.target.id)}}>
                    {index}
                </div>
            ))}

        </div>


      
    </div>
  )
}
