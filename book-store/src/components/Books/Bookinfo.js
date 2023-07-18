import React, {Fragment} from 'react'
import { useSelector } from 'react-redux'

const Bookinfo = () => {
    const info = useSelector((state) => state.read)
    return (
        <Fragment>
            <h2>Book Details</h2>
            {Object.values(info).length > 0 ? (
                <div>
                <p className='fw-bold'>Title: {info.title}</p>
                <p className='fw-bold'>Inserted by: {info.userName}</p>
                <p className='fw-light'>Description: {info.description}</p>
                <p className='fst-italic'>Price: {info.price}</p>
                </div>
            ) : (
                <div className='alert alert-secondary' role='alert'>
                There is no book selected yet. Please select!
                </div>
            )}
        </Fragment>
    )
}

export default Bookinfo
