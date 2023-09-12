import React from 'react';
import PropTypes from 'prop-types';

const Book = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div>
            <h3 className='bg-gray-400 p-5 m-5 rounded-xl'>{title}</h3>
        </div>
    );
};

Book.propTypes = {
    
};
Book.propTypes ={
    bookmark: PropTypes.object
}

export default Book;