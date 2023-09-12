import PropTypes from 'prop-types';
import { FaBeer  } from 'react-icons/fa';
const Blog = ({blog,handleAddToBookmark,handleMarkRead}) => {
    // console.log(handleAddToBookmark)
    const {title,cover,author_img,author,reading_time,posted_date,hashtags,id} = blog;
    // console.log(title)
    return (
        <div className='mb-9 mt-5'>
            <img className='w-full' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex gap-6 mt-4'>
                    <div>
                    <img className='w-[60px]' src={author_img} alt="" />
                    </div>
                    <div>
                        <h4 className='font-semibold'>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min red</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ms-3 text-red-800'><FaBeer  /></button>
                </div>
            </div>
            <p className='text-2xl font-semibold mt-5'>{title}</p>
            <p className='mt-3'>
                {
                    hashtags.map(hash => <span key={id}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkRead(reading_time,id)} className='text-rose-600 underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes ={
    blog:PropTypes.object.isRequired,

    handleAddToBookmark:PropTypes.func,
    handleMarkRead:PropTypes.func

  }
export default Blog;