import React, { useEffect, useState } from 'react'
import Pagination from './components/Pagination';
import Posts  from './components/Posts';
import PostPerPage from './components/PostPerPage';

export default function App() {

  const [posts, setPosts] = useState([]);
  const [totalPost, setTotalPost] = useState(0);
  const [postPerPage, setPostPerPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const count = 5;


  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handlePostPerPage = (num) => setPostPerPage(num);
  

  useEffect(() => {
    const fetchData =  ()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(data => data.json())
      .then(res => {
        setPosts(res)
        setTotalPost(res.length);
        setPostPerPage(count);
        console.log(posts);
      })
      .catch((err)=>{console.log('Oops! some error occurs. Check your internet connection.', err)});

    }
    
    fetchData();
  }, []);


  return (posts.length == 0) ?  <h1>laoding in app...</h1>:(
    <div className='text-blue-500'>

      total post - {totalPost}, current page - {currentPage }

      <PostPerPage handlePostPerPage={handlePostPerPage} paginate={paginate}/>

    
      <Posts posts={posts} currentPage={currentPage} postPerPage={postPerPage} />

      <Pagination postPerPage={postPerPage} totalPost={totalPost} paginate={paginate}/>
      
    </div>
  )
}
