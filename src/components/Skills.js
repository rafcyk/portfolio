import React from 'react';
import Adobe from '../images/adobe.png';
import Bootstrap from '../images/bootstrap.png';
import Css from '../images/css.png';
import Html from '../images/html.png';
import Js from '../images/js.png';
import ReactImage from '../images/react.png';
import Git from '../images/git.png';
import TypeScript from '../images/typescript.png';

const Skills = () => {

    window.addEventListener('scroll', () => {
        if(window.pageYOffset > document.querySelector('section.skills').offsetTop - 300){
            document.querySelector('section.skills').classList.add('appear');
        }
    })

    return (
        <section className = 'skills'>
            <h2>Skills</h2>
            <div className="icons">
                <img src={Html} alt="html" title = 'html'/>
                <img src={Css} alt="css" title = 'css'/>
                <img src={Js} alt="js" title = 'js'/>
                <img src={ReactImage} alt="react" title = 'react'/>
                <img src={Bootstrap} alt="bootstrap" title = 'bootstrap'/>
                <img src={Adobe} alt="adobeXd" title = 'adobeXd'/>
                <img src={Git} alt="git" title = 'git'/>
                <img src={TypeScript} alt="typescript" title = 'typescript'/>
            </div>
        </section>
    );
};

export default Skills;