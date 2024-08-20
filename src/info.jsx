import React from 'react'
import './App.css'

export default function Info() {

    return (
        <div className="info">
            <div className="info__img-container">
                <img className='info__img' src="/photo.JPG" alt="Nicholas Masters" width="50px" height="50px" />
            </div>
            
            <h1 className='info__name'>Nicholas Masters</h1>
        </div>
    )

}
