import PropTypes from 'prop-types';
import React from 'react';
import Book from './Book';

const Bookmark = ({bookmarks,readingTime}) => {
    return (
        <div className='w-1/3 bg-blue-100 p-5 mt-12'>
            <div>
                <h2>Reading Time : {readingTime}</h2>
            </div>
            <h1 className='text-2xl bg-gray-300 p-5 mt-5 rounded-xl text-center'>Bookmarks {bookmarks.length}</h1>
            {
                bookmarks.map(book => <Book key={book.id} bookmark={book}></Book>)
            }
        </div>
    );
};

Bookmark.propTypes ={
    bookmarks: PropTypes.array,
    readingTime:PropTypes.number,
}
export default Bookmark;