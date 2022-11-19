import { useRef,React } from 'react'
import HomeCard from '../components/homeCard'
import APropos from './aPropos'
import {
  Link
} from "react-router-dom";

import { FaBars,FaTimes } from 'react-icons/fa';
import "../components/header.css"

const Home = (name) => {

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

  return (
    <>
   
    <section className=' bg-header2 bg-no-repeat 2xl:pb-[8rem]  pb-[6rem] text-white w-full rounded-bl-[8rem] lg:pb-[4rem]'>
       <header className='pt-[2.8rem] pb-[3.4rem]'>
        <nav className='z-[100000]' ref={navRef} > 
          <ul className='flex justify-around px-[15rem] text-white items-center font-regular text-[1.6rem]'>
            <Link to="/" className='text-[4rem] font-bold sm:text-[2rem]'> TITRE </Link>
            <Link to="/portfolio" ><li className='hover:font-regular'>PORTFOLIO</li> </Link>
            <Link to="/tarifs"> <li>TARIFS</li></Link>
            <Link to="/contact" > <li>CONTACT</li> </Link>
          </ul>
        </nav>
      </header>
      <div className='text-center' >
        <h2 className='text-[3.2rem] font-medium ' >Hamza Mahmood </h2>
        <h1 className='text-[4.8rem] font-semibold' >Développeur web</h1>
        <h2 className='text-[3.2rem] font-medium' > Création de site web : site vitrine,<br></br>  corporate et e-commerce </h2>

        <div className='pt-[3rem]' ><Link to="/contact" > <button type='submit' className=' text-[#FE6965] bg-[#FFFFFF] font-medium px-[4rem] py-[0.5rem] rounded-full text-[2rem] hover:bg-[#EFEFEF]  transition ease-in-out delay-100 ' >Contact</button> </Link> </div>
        </div>
        
    </section>

    <section >
      <h1 className='text-[4.8rem] font-medium flex justify-center mt-[5rem] mb-[8rem] '>Mes Services </h1>

      <div>
        <div className=' flex justify-center flex-wrap mx-[9%] '  >
            <HomeCard description="WordPress est un logiciel de la famille des CMS. Le CMS WordPress permet à la fois de gagner du temps de développement au niveau de la création de votre site internet et d’y ajouter facilement des pages, WordPress permet donc la création de sites dynamiques." title="Wordpress" bgImage="bg-wordpress" />
            <HomeCard description="Le web design est la conception de l'interface web : l’architecture interactionnelle, l’organisation des pages, l’arborescence et la navigation dans un site web" title="Web design" bgImage="bg-webdesignsvg" />
            <HomeCard description="Le référencement naturel, le SEO a pour but d’améliorer votre classement dans les résultats de recherche tel que Google afin d’augmenter le trafic de visiteurs sur votre site web." title="SEO" bgImage="bg-seo" />
        </div>
        
        <div className='flex justify-center flex-wrap mx-[9%] mt-[1%] '  >
          <HomeCard description="Compatibilité desktop tablette & application mobile." title="Responsive design" bgImage="bg-responsive" />
          <HomeCard description="Mise en place d’outils spécifiques telle que calendly, des outils de tracking, outil d’automation et d’autres encore " title="Mise en place d'outils" bgImage="bg-calendly" />
          <HomeCard description="La maintenance d'un site web consiste à mener un ensemble d'actions qui vont garder votre site en bonne santé et à jour, sur le plan technique mais aussi éditorial. Il s'agit donc de détecter et corriger les problèmes qui peuvent se créer au fur et à mesure que votre site évolue." title="Maintenance site " bgImage="bg-maintenance" />
        </div>
      </div>
    </section>

    
      <APropos/>
    

    </>
  )
}

export default Home