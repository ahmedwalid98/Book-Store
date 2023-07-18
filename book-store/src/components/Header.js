import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {logInOut} from './store/authSlice'

const Header = () => {
    const {isLoggedIn} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    return (
        <div className='navbar bg-dark navbar-dark'>
            <span className='navbar-brand mb-0 h1'>my books</span>
            <button className='btn btn-outline-primary' type='submit' onClick={() => dispatch(logInOut())}>{isLoggedIn ? 'log out': 'log in'}</button>
        </div>
    )
}

export default Header
