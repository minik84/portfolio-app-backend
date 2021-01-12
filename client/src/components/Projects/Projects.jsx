import React from 'react';

import Project from './Project';

import photoProject1 from '../../assets/images/math-app.png'

const projectDetails = [
  {
    id: 1,
    image: photoProject1,
    name: 'Zadania z matematyki',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae a sunt libero optio laudantium neque veritatis sed dolorem doloribus! Debitis ullam tempora amet labore esse pariatu quasi nsectetur adipisicing .',
    website: 'https://math-react-express-app.herokuapp.com/',
  },
  {
    id: 2,
    image: photoProject1,
    name: 'Mniam - aplikacja mobilna',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae a sunt libero optio laudantium neque veritatis sed dolorem doloribus! Debitis ullam tempora amet labore esse pariatur aut dicta quod!',
    website: 'https://www.apple.com/pl/search/mniam123?page=1&sel=explore&src=globalnav',
  },
];


const Projects = () => {

  const projectsList = projectDetails.map(project => <Project key={project.id} id={project.id} image={project.image} name={project.name} description={project.description} website={project.website} />)
  return (
    <div className="projects">
      <p className="projects__title">MOJE AKTUALNE PROJEKTY</p>
      {projectsList}
    </div>
  )
}

export default Projects;
