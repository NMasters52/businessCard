import React from 'react'

export default function About() {

    return (
        <div className='about'>
            <p className='about__text'>Passionate Front-End Product Developer specializing in creating exceptional web experiences. With expertise in HTML, CSS, JavaScript, PHP, and React, I design and develop responsive, interactive, and user-centered applications. Let’s collaborate to bring your digital vision to life with precision and creativity.</p>
            <div className="contact-info">
                <div className="contact-item">
                    <i className="fa-solid fa-phone contact__icon"></i>
                    <p className="contact-info-text">(904) 402-0763</p>
                </div>
                <div className="contact-item">
                    <i className="fa-solid fa-envelope contact__icon"></i>
                    <p className="contact-info-text">nmasters52@gmail.com</p>
                </div>
                <div className="contact-item">
                    <i className="fa-solid fa-earth-americas contact__icon"></i>
                    <p className="contact-info-text">Jacksonville, FL USA</p>
                </div>
            </div>


        </div>
    )
}