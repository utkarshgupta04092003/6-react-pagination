import React, { useEffect, useState } from 'react'

export default function Pagination({postPerPage, totalPost, setCurrentPage, paginate}) {

    const [pages, setPages] = useState(0);


    useEffect(() => {
        setPages(Math.ceil(totalPost/postPerPage));
    }, [postPerPage]);
    
  return (
    <div>


        {/* post perpage - {postPerPage}
        total post - {totalPost}
        pages - {pages} */}

        <div className="flex justify-center self-center w-[100%] my-5">

            {Array.from({ length: pages }).map((item,index)=>(
                <div className='flex border border-gray-500 px-2 py-1 cursor-pointer'
                key={index}
                id={index}
                onClick={(e)=>{paginate(e.target.id)}}>
                    {index+1}
                </div>
            ))}

        </div>


      
    </div>
  )
}
