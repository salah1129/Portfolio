import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'aos/dist/aos.css';
import { useEffect, useRef } from 'react';
import AOS from 'aos'; 

function App() {

  const projectsRef = useRef(null); 

  const projects = [
    {
      name : "Site web e-commerce",
      description : "Plateforme e-commerce pour les pièces auto détachés, qui représente plusieurs fonctionalités notamment Présentation des catégories et des produits, la Gestion du panier, l'authentification des utilisateurs et la recherche de produits spécifiques",
      link : "dalia-demo.mp4",
      codeFrontEnd: "https://github.com/salah1129/dalia-frontend/tree/master",
      codeBackEnd: "https://github.com/salah1129/dalia-backend/tree/master"
    },
    {
      name: "Site de films",
      description: "Plateforme de streaming de films qui propose une large sélection de films. Les fonctionnalités incluent la navigation par genres et catégories, la gestion des listes de visionnage et la recherche avancée de contenus",
      link: "movie-demo.mp4",
      codeFrontEnd: "https://github.com/salah1129/movies-frontend/tree/master",
      codeBackEnd: "https://github.com/salah1129/movies-backend/tree/master"
    }
    
  ]

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  const handleScrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='home' data-aos="fade-up">
      <div className='header'>
        <div className='logo'>SB</div>
        <div className='contact'>
          <div className='email'> <a href='mailto:salahbelhabchi00@gmail.com' target='blank'><i className="fas fa-envelope"></i></a></div>
          <div className='github'> <a href='https://github.com/salah1129' target='blank'><i className="fab fa-github"></i></a></div>
          <div className='linkedin'> <a href='https://www.linkedin.com/in/salah-belhabchi-96a24b250' target='blank'><i className="fab fa-linkedin"></i></a></div>
        </div>
      </div>
      <div className='cover'>
        <div>
        <h2>BELHABCHI SALAH-EDDINE</h2>
        <p>Développeure full stack</p>
        <p>React / Java</p>
        <button onClick={handleScrollToProjects}>Voir mes projets</button> 
        </div>
        <img src='/profil.jpg' alt='' height={"500px"} width={"500px"}/>
      </div>
      <h1 data-aos="zoom-in">A propos de moi</h1>
      <div className='about' data-aos="fade-up">
      Développeur Web Full Stack Junior passionné, je possède une solide formation en développement web et une expérience pratique acquise à travers divers projets personnels et professionnels. J'aime relever des défis techniques et apprendre de nouvelles technologies pour améliorer mes compétences et offrir des solutions innovantes. <br /> <br/>Actuellement à la recherche d'un stage ou d'un emploi pour mettre en pratique mes compétences et contribuer à des projets stimulants <br /> <br/>Objectifs professionnels :
      Je suis toujours à la recherche de nouvelles opportunités pour mettre en pratique mes compétences et contribuer à des projets stimulants. Mon objectif est de continuer à développer mon expertise en tant que développeur full stack et d'apporter de la valeur ajoutée à l'équipe avec laquelle je collabore.
      </div>
      <h1 ref={projectsRef} data-aos="zoom-in">Mes projets</h1>
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
      <h1 data-aos="zoom-in">Skills</h1>
        <div className='skills' >
        <img src='/java.png' alt='' data-aos="flip-up"/>
        <img src='/spring.png' alt='' data-aos="flip-up"/>
        <img src='/javascript.png' alt='' data-aos="flip-up"/>
        <img src='/react.png' alt='' data-aos="flip-up"/>
        <img src='/next.jpg' alt='' data-aos="flip-up"/>
        <img src='/mongo db.png' alt='' data-aos="flip-up"/>
        <img src='/my sql.png' alt='' data-aos="flip-up"/>
        <img src='/html.png' alt='' data-aos="flip-up"/>
        <img src='css.png' alt='' data-aos="flip-up"/>
        </div>
        <div>
        <h1 className='thanks' data-aos="zoom-in">Thanks for scrolling !</h1>
        </div>
        <p style={{textAlign: "end"}}>@SB</p>
    </div>

  );
}

export default App;
