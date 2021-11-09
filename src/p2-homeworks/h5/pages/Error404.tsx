import React from 'react';
import s from './Error404.module.css';
import error from './../../../images/not_found.jpg'

function Error404() {
    return (
        <div className={s.error_page}>
            <div className={s.error_img}>
                <img src={error} alt=""/>
            </div>
        </div>
    )
}

export default Error404
