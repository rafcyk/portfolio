import React from 'react';

const Sidebar = () => {

    window.addEventListener('scroll', () => {
        const side = document.querySelector('aside p');
        
        if(window.pageYOffset > document.querySelector('section.about').offsetTop - 200 && window.pageYOffset < document.querySelector('section.skills').offsetTop - 100){
            side.textContent = 'about';
        } else if(window.pageYOffset > document.querySelector('section.skills').offsetTop - 100 && window.pageYOffset < document.querySelector('section.projects').offsetTop - 100){
            side.textContent = 'skills';
        } else if(window.pageYOffset  > document.querySelector('section.projects').offsetTop - 100 && window.pageYOffset < document.querySelector('section.contact').offsetTop - 100){
            side.textContent = 'projects';
        } else if(window.pageYOffset > document.querySelector('section.contact').offsetTop - 100){
            side.textContent = 'contact';
        } else if (window.pageYOffset < document.querySelector('section.about').offsetTop - 200){
            side.textContent = 'home';
            document.querySelector('aside div').style.opacity = 1;
        }
    })

    return (
        <aside>
            <div></div>
            <p></p>
        </aside>
    );
};

export default Sidebar;