import React from 'react';

export default function PostPerPage({handlePostPerPage, paginate}) {

    const changePostPerPage = (e)=>{
        console.log(e.target.value);
        paginate(0);
        handlePostPerPage(e.target.value);
    }
  return (
    <div className='my-5'>

            <label htmlFor="">Select the number of post per page: </label>
            <select name="" id="" onChange={changePostPerPage}
            className='border border-blue-500'>
                <option value="5" >5</option>
                <option value="10" >10</option>
                <option value="15" >15</option>
                <option value="20" >20</option>
                <option value="25" >25</option>
                <option value="50" >50</option>
            </select>
      
    </div>
  )
}
