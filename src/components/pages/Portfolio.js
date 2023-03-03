import React from 'react';
import Project from '../Project'

const dwuGame = {
  name: 'Don\'t Wake Up',
  description: 'A story driven rpg game built using JavaScript, HTML, and CSS.',
  deployed: 'https://claricetran.github.io/dont-wake-up/',
  repo: 'https://github.com/claricetran/dont-wake-up',
  src: 'dwu.jpg'
}

const apothecary = {
  name: 'Wild Thorn Apothecary',
  description: 'An apothecary storefront website built with Express, SQL2/Sequelize, and Handlebars.',
  deployed: 'https://wildthornapothecary.herokuapp.com/',
  repo: 'https://github.com/blaubachs/wild-thorn-apothecary',
  src: 'wta.jpg'
}

const proPort = {
  name: 'Professional Portfolio',
  description: 'A responsive professional portfolio site built from scratch using HTML and CSS.',
  deployed: 'https://github.com/VisualViolet/professional-portfolio',
  repo: 'https://visualviolet.github.io/professional-portfolio/',
  src: 'portfolio.jpg'
}

const techBlog = {
  name: 'Tech Blogger',
  description: 'A CMS style blog site where developers can publish blog posts and comment on others as well!',
  deployed: 'https://mvc-tech-blogger-sql.herokuapp.com/',
  repo: 'https://github.com/VisualViolet/mvc-tech-blog',
  src: 'tech-blog.jpg'
}

const scheduler = {
  name: 'Work Day Scheduler',
  description: 'A planner built with HTML, CSS, and JavaScript that allows the user to keep track of daily work events/activities.',
  deployed: 'https://visualviolet.github.io/work-day-scheduler/',
  repo: 'https://github.com/VisualViolet/work-day-scheduler',
  src: 'scheduler.jpg'
}

const splash = {
  name: 'Splash Page',
  description: 'Curious to see how far I\'ve come? Take a look at my very first splash page built with HTML and CSS.',
  deployed: 'https://visualviolet.github.io/splash-page/',
  repo: 'https://github.com/VisualViolet/splash-page',
  src: 'splash.jpg'
}

export default function Portfolio() {
  return (
    <div>
      <h1 className='text-center title'>Portfolio</h1>
        <div className='row card-area mt-5'>
          <div className='card-container col-12 d-flex flex-wrap justify-content-center'>
            <Project name={dwuGame.name} description={dwuGame.description} deployed={dwuGame.deployed} repo={dwuGame.repo} src={dwuGame.src}/>
            <Project name={apothecary.name} description={apothecary.description} deployed={apothecary.deployed} repo={apothecary.repo} src={apothecary.src}/>
            <Project name={proPort.name} description={proPort.description} deployed={proPort.deployed} repo={proPort.repo} src={proPort.src}/>
          </div>
            <div className='card-container col-12 d-flex flex-wrap justify-content-center mt-5'>
              <Project name={techBlog.name} description={techBlog.description} deployed={techBlog.deployed} repo={techBlog.repo} src={techBlog.src}/>
              <Project name={scheduler.name} description={scheduler.description} deployed={scheduler.deployed} repo={scheduler.repo} src={scheduler.src}/>
              <Project name={splash.name} description={splash.description} deployed={splash.deployed} repo={splash.repo} src={splash.src}/>
            </div>
        </div>
    </div>
  );
}