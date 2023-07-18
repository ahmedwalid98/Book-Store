import React, {Fragment, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBooks, deleteBook } from '../store/bookSlice'
import Booklist from './Booklist'
import Bookinfo from './Bookinfo'

const Bookcontainer = () => {
    const {isLoading, books} = useSelector(state => {
        return state.book
    })

    const {isLoggedIn} = useSelector(state => state.auth)
    const dispatch = useDispatch();
    useEffect(()=>{
        
        dispatch(getBooks())
        
    },[dispatch])
    return (
        <Fragment>
            <hr className='my-5' />
            <div className='row'>
                <div className='col'>
                    <Booklist
                    isLoading={isLoading} 
                    books={books} 
                    isLoggedIn={isLoggedIn}
                    deleteBook={deleteBook}
                    dispatch={dispatch}/>
                </div>
                <div className='col side-line'>
                    <Bookinfo />
                </div>
            </div>
        </Fragment>
    )
}

export default Bookcontainer
