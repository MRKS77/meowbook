import React from 'react';
import errorCat from '../../../assets/images/errorCat.png'
import s from './NotFound404.module.css';

const NotFound404 = (props) => {
    return (
        <div className={s.error}>
            <img src={errorCat} alt="" />
            <h1>404 NOT FOUND</h1>
            <div>This page doesn't exist</div>
        </div>
    )
}

export default NotFound404;