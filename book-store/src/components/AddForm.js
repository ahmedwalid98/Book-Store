import React, {useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { insertBook } from './store/bookSlice';

const AddForm = () => {
    const titleRef = useRef(null);
    const priceRef = useRef(null);
    const descRef = useRef(null);

    const dispatch = useDispatch();
    const {isLoggedIn} = useSelector((state) => state.auth)
    const formSubmit = (e) => {
        e.preventDefault();
        dispatch(
        insertBook({
            title: titleRef.current.value,
            price: priceRef.current.value,
            description: descRef.current.value,
        })
        );
        titleRef.current.value = null;
        priceRef.current.value = null;
        descRef.current.value = null;
    };
    return (
    <div className='row'>
        <div className='col-6 offset-3 mt-3'>
            <h2>Insert Book</h2>
            <form onSubmit={formSubmit}>
                <div className='form-group'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' className='form-control' id='title' required ref={titleRef}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='price'>Price</label>
                    <input type='number' className='form-control' id='price' required ref={priceRef}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='Description'>Description</label>
                    <textarea
                        className='form-control'
                        id='Description'
                        rows='3'
                        required
                        ref={descRef}
                    ></textarea>
                </div>
                <button type='submit' className='btn btn-primary' disabled= {!isLoggedIn}>
                Submit
                </button>
            </form>
        </div>
    </div>
    );
}

export default AddForm
