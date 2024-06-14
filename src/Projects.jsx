const Projects = ({projects}) => {
    return ( 
        <div className='projects'>
  {projects.map((project, index) => (
    <div key={index} className='project' data-aos="zoom-in">
      <video src={project.link} controls width={"100%"} />
      <div className='informations'>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <div className='code'>
          <div><a href={`${project.codeFrontEnd}`} target='blan'>Code frontend</a></div>
          <div><a href={`${project.codeBackEnd}`} target='blan'>Code backend</a></div>
        </div>
      </div>
    </div>
  ))}
    </div>
    );
}

export default Projects;