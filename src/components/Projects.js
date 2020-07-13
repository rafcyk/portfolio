import React from 'react';
import Code from '../images/gh-code.png';
import Demo from '../images/playDemo.png';

const Projects = () => {

    window.addEventListener('scroll', () => {
        if(window.pageYOffset > document.querySelector('section.projects').offsetTop - 300){
            document.querySelector('section.projects').classList.add('appear');
        }
    })
    return (
        <section className = 'projects'>
            <h2>Projects</h2>
            <div className="wrapProjects">
                <div className = 'project'>
                    <div className = 'desc'>
                        <p>Example landing page for firm. Made with React.</p>
                            <a href="https://rafcyk.github.io/removals/" target = '_blank'><img src={Demo} alt="demo"/></a>
                            <a href="https://github.com/rafcyk/removals" target = '_blank'><img src={Code} alt="code"/></a>
                        
                    </div>
                </div>
                <div className = 'project'>
                    <div className = 'desc'>
                        <p>Simple game, where we need to find all the same images.</p>
                            <a href="https://rafcyk.github.io/find-image/" target = '_blank'><img src={Demo} alt="demo"/></a>
                            <a href="https://github.com/rafcyk/find-image" target = '_blank'><img src={Code} alt="code"/></a>
                        
                    </div>
                </div>
                <div className = 'project'>
                    <div className = 'desc'>
                        <p>Example layout page with curiosities where we can add or review curiosities.</p>
                            <a href="https://rafcyk.github.io/curiosity/" target = '_blank'><img src={Demo} alt="demo"/></a>
                            <a href="https://github.com/rafcyk/curiosity" target = '_blank'><img src={Code} alt="code"/></a>
                        
                    </div>
                </div>
                <div className = 'project'>
                    <div className = 'desc'>
                        <p>Example single page for DJ which was created only with HTML, CSS and JavaScript.</p>
                            <a href="https://rafcyk.github.io/djWebsite/" target = '_blank'><img src={Demo} alt="demo"/></a>
                            <a href="https://github.com/rafcyk/djWebsite" target = '_blank'><img src={Code} alt="code"/></a>
                    </div>
                </div>
                <div className = 'project'>
                    <div className = 'desc'>
                        <p>Website with quizzes in three categories. Made with HTML, CSS and Javascript.</p>
                            <a href="https://rafcyk.github.io/quiz/" target = '_blank'><img src={Demo} alt="demo"/></a>
                            <a href="https://github.com/rafcyk/quiz" target = '_blank'><img src={Code} alt="code"/></a>
                    </div>
                    </div>
                    <div className = 'project'>
                    <div className = 'desc'>
                        <p>Weather App create with Open Weather Api</p>
                            <a href="https://rafcyk.github.io/weather-app/" target = '_blank'><img src={Demo} alt="demo"/></a>
                            <a href="https://github.com/rafcyk/weather-app" target = '_blank'><img src={Code} alt="code"/></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;