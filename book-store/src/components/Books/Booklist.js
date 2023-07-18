import React from 'react'
import  {readBook}  from '../store/readSLice'
const Booklist = ({ isLoading, books, isLoggedIn, dispatch, deleteBook }) => {
        const booksList = books.length <= 0 ? ("There is no books available") 
        : (
            books.map((el) => (
            <li className='list-group-item d-flex  justify-content-between align-items-center' key={el.id}>
                <div>{el.title}</div>
                <div className='btn-group' role='group'>
                    <button type='button' className='btn btn-primary' disabled={!isLoggedIn} onClick={() => dispatch(readBook(el))}>
                    Read
                    </button>
                    <button type='button' className='btn btn-danger' disabled={!isLoggedIn} onClick={() => dispatch(deleteBook(el))}>
                    Delete
                    </button>
                </div>
            </li>
        ))
        )
    
    return (
        <div>
        <h2>Book list</h2>
        {
            isLoading ? (
                'Loading...'
            ) : (
                <ul className='list-group' > {booksList} </ul>
            )
        }

            
        </div>
    )
}

export default Booklist
