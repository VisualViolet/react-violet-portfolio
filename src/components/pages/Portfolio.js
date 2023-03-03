import React from 'react';
import Project from '../Project'

const dwuGame = {
  name: 'Don\'t Wake Up',
  description: 'A story driven rpg game built using JavaScript, HTML, and CSS.',
  deployed: 'https://claricetran.github.io/dont-wake-up/',
  repo: 'https://github.com/claricetran/dont-wake-up'
}

const apothecary = {
  name: 'Wild Thorn Apothecary',
  description: 'An apothecary storefront website built with Express, SQL2/Sequelize, and Handlebars.',
  deployed: 'https://wildthornapothecary.herokuapp.com/',
  repo: 'https://github.com/blaubachs/wild-thorn-apothecary'
}

const profileGen = {
  name: 'Professional Portfolio',
  description: 'A responsive professional portfolio site built from scratch using HTML and CSS.',
  deployed: 'https://github.com/VisualViolet/professional-portfolio',
  repo: 'https://visualviolet.github.io/professional-portfolio/'
}

const techBlog = {
  name: 'Tech Blogger',
  description: 'A CMS style blog site (think Wordpress) where developers can publish blog posts and comment on others as well!',
  deployed: 'https://mvc-tech-blogger-sql.herokuapp.com/',
  repo: 'https://github.com/VisualViolet/mvc-tech-blog'
}

const scheduler = {
  name: 'Work Day Scheduler',
  description: 'A planner built with HTML, CSS, and JavaScript that allows the user to keep track of daily work events/activities.',
  deployed: 'https://visualviolet.github.io/work-day-scheduler/',
  repo: 'https://github.com/VisualViolet/work-day-scheduler'
}

const splash = {
  name: 'Splash Page',
  description: 'Curious to see how far I\'ve come? Take a look at my very first splash page built with HTML and CSS.',
  deployed: 'https://visualviolet.github.io/splash-page/',
  repo: 'https://github.com/VisualViolet/splash-page'
}

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div>
      <Project name={dwuGame.name} description={dwuGame.description} deployed={dwuGame.deployed} repository={dwuGame.repo}/>
      <Project name={apothecary.name} description={apothecary.description} deployed={apothecary.deployed} repository={apothecary.repo}/>
      <Project name={profileGen.name} description={profileGen.description} deployed={profileGen.deployed} repository={profileGen.repo}/>
      <Project name={techBlog.name} description={techBlog.description} deployed={techBlog.deployed} repository={techBlog.repo}/>
      <Project name={scheduler.name} description={scheduler.description} deployed={scheduler.deployed} repository={scheduler.repo}/>
      <Project name={splash.name} description={splash.description} deployed={splash.deployed} repository={splash.repo}/>
      </div>
    </div>
  );
}