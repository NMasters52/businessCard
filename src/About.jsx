import React from 'react'

export default function About() {

    return (
        <div className='about'>
            <p className='about__text'>I’m a passionate front-end web developer with a solid foundation in HTML, CSS, JavaScript, React, and PHP. Driven by creativity and a love for problem-solving, I’m committed to crafting seamless, user-friendly interfaces. My recent training at Jax Code has equipped me with the skills to bring innovative ideas to life on the web. As someone who is adaptable, quick to learn, and always eager to grow, I’m excited to contribute to a dynamic team and help build exceptional digital experiences.</p>
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