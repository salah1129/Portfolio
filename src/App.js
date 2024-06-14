import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'aos/dist/aos.css';
import { useEffect, useRef } from 'react';
import AOS from 'aos'; 
import Header from "./Header"
import Cover from './Cover';
import About from "./About"
import Projects from './Projects';
import Skills from "./Skills"

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
      <Header />
      <Cover onclick={ handleScrollToProjects} />
      <h1 data-aos="zoom-in">A propos de moi</h1>
      <About/>
      <h1 ref={projectsRef} data-aos="zoom-in">Mes projets</h1>
      <div >
      <Projects projects={projects} />
      </div>
      <h1 data-aos="zoom-in">Skills</h1>
      <Skills />
      <h1 className='thanks' data-aos="zoom-in">Thanks for scrolling !</h1>
      <p style={{textAlign: "end"}}>@SB</p>
    </div>

  );
}

export default App;
