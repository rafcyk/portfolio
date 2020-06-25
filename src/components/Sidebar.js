import React from 'react';

import Git from '../images/git-small.png';
import Yt from '../images/yt.png';

const Sidebar = () => {

    window.addEventListener('scroll', () => {
        const side = document.querySelector('aside p');
        
        if(window.pageYOffset > document.querySelector('section.about').offsetTop - 200 && window.pageYOffset < document.querySelector('section.skills').offsetTop - 150){
            side.textContent = 'about';
        } else if(window.pageYOffset > document.querySelector('section.skills').offsetTop - 150 && window.pageYOffset < document.querySelector('section.projects').offsetTop - 150){
            side.textContent = 'skills';
        } else if(window.pageYOffset  > document.querySelector('section.projects').offsetTop - 150 && window.pageYOffset < document.querySelector('section.contact').offsetTop - 150){
            side.textContent = 'projects';
        } else if(window.pageYOffset > document.querySelector('section.contact').offsetTop - 150){
            side.textContent = 'contact';
        } else if (window.pageYOffset < document.querySelector('section.about').offsetTop - 200){
            side.textContent = 'home';
            document.querySelector('aside div.line').style.opacity = 1;
            document.querySelector('aside div.wrapIcons').style.opacity = 1;
        }
    })

    return (
        <aside>
            <div className = 'line'></div>
            <p></p>
            <div className="wrapIcons"> 
                <a href="https://www.youtube.com/channel/UC-1f0maaUj29TJlCWmRNJYw?view_as=subscriber"><img src={Yt} alt="youtube"/></a>
                <a href="https://github.com/rafcyk"><img src={Git} alt="git"/></a>
            </div>

        </aside>
    );
};

export default Sidebar;