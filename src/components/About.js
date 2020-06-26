import React from 'react';

import Icon from '../images/about.png';

window.addEventListener('scroll', () => {
    if(window.pageYOffset > document.querySelector('section.about').offsetTop - 300){
        document.querySelector('section.about').classList.add('appear');
    }
})

const About = () => {
    return (
        <section className = 'about'>
            <div className="desc">
                <h2>About</h2>
                <p>Hello, I'm 23 years old. I'm third year study of IT.
                I am studying programming at the university. Additionally I get to know web technology which is my passion and in this direction I want to constantly develop myself.</p>
            </div>
            <div className="icon-image">
                <img src={Icon} alt="icon"/>
            </div>
        </section>
    );
};

export default About;