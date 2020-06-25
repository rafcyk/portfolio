import React from 'react';

import ContactImage from '../images/contact.jpg'
import Pdf from '../CV_Rafał_Dobrowolski.pdf'

const Contact = () => {

    window.addEventListener('scroll', () => {
        if(window.pageYOffset > document.querySelector('section.contact').offsetTop - 300){
            document.querySelector('section.contact').classList.add('appear');
        }
    })
    return (
        <section className = 'contact'>
            <h2>Contact</h2>
            <div className="data-image">
                <img src={ContactImage} alt="contact"/>
                <div className="data">
                    <p><span className="name">e-mail. </span>rafcy9@gmail.com</p>
                    <p><span className="name">phone </span>517618385</p>
                    <p><span className="name">github </span><a href="https://github.com/rafcyk" target = '_blank'>Rafcyk</a></p>
                    <p><span className="name">CV </span><a href={Pdf} target = "_blank">Download</a></p>
                </div>
            </div>
            
        </section>
    );
};

export default Contact;