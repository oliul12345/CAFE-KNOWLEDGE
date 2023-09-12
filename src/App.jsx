

import './App.css'
import Header from './Comphonents/Header/Header'
import Blogs from './Comphonents/Header/Blogs/Blogs';
import Bookmark from './Comphonents/Bookmarks/Bookmark';
import { useState } from 'react';

function App() {
  const[bookmarks,setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = (blog) =>{
    console.log('jkdhf skdjfh ksdjfh ',blog)
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const handleMarkRead = (time,id) =>{
    console.log('mdsjdf ksjks jdkre dsd ', time)
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    ///   remove the read blog from bookmark //
    console.log('remove bookmark',id)
    const remainingBookMark = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookMark);
  }
  return (
    <>
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkRead={handleMarkRead}></Blogs>
      <Bookmark bookmarks={bookmarks} readingTime={readingTime}></Bookmark>
    </div>
    </>
  )
}

export default App
