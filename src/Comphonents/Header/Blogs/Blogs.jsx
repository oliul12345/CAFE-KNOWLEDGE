 import PropTypes from 'prop-types';
import { useEffect, useState } from 'react'
import Blog from './Blog';

const Blogs = ({handleAddToBookmark,handleMarkRead}) => {
    const [blogs,setBlogs] = useState([]);
    useEffect(() =>{
      fetch('blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
    } ,[])
    return (
        <div className='md:w-2/3 mx-7 mb-5'>
            <h1 className='text-3xl'>Blogs : {blogs.length}</h1>
            {
                blogs.map((blog,idx) => <Blog key={idx}
                     blog = {blog}
                     handleAddToBookmark={handleAddToBookmark}
                     handleMarkRead={handleMarkRead}
                     ></Blog>)
            }
        </div>
    );
};
Blogs.PropTypes = {
  
    handleAddToBookmark:PropTypes.func,
    handleMarkRead:PropTypes.func
}
export default Blogs;