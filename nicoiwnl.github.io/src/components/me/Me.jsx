import './Mestyles.css'; // Importa el archivo CSS sin usar 'styles from'
import React from 'react';
import MeImg from '../../assets/MeImg.png';
import LightModeIcon from '@mui/icons-material/LightMode';
import LK from '../../assets/LK.png';
import IG from '../../assets/IG.png';
import FB from '../../assets/FB.png';
import GH from '../../assets/GH.png';
import CV from '../../assets/CV-NicolasOpazo.pdf';
import { Button } from '@mui/material'; 

function Me({ toggleTheme }) {
    return (
        <section id='Me' className= 'Contenedor'> 
            <div className='ColorContenedor'>
                <img className='circularImage' src={MeImg} alt="Me"/>
                
            </div>
            <div className='Info'>
              <h1> Nicolás<br/>Opazo</h1>
              <h2>Estudiante Universitario</h2>
              <span>
                <a href='https://www.linkedin.com/in/nicol%C3%A1s-opazo-212852179/' target='_blank'>
                  <img src={LK} alt="LK" />
                </a>
                <a href='https://www.instagram.com/nico_opz/' target='_blank'>
                <img src= {IG} alt="ig" />
                </a>
                <a href='https://www.facebook.com/opazomalla/' target='_blank'>
                <img src={FB} alt="fb" />
                </a>
                <a href='https://github.com/nicoiwnl' target='_blank'>
                <img src={GH} alt="gh" />
                </a>
              </span>
              <p className='descripcion'>
                Hola! Soy un estudiante de Ingeniería Civil en Informática de la Universidad Catolica del Maule,
                con animos 
                de aprender cosas nuevas en el mundo de la Tecnología e Información.
                Me gusta la música, los videojuegos y el descenso. 
                Actualmente estoy aprendiendo Desarrollo de Aplicaciones Moviles e Inteligencia Artificial
                <br/>
                <br/>
                <br/>
                
                Te invito a ver mi CV y mis proyectos en GitHub, que tengas un buen dia.
              </p>
              <a href={CV}>
                <button className='hover' download>Descargar CV</button>
              </a>
              <br />
              <br />
              <br />
            </div>
        </section>
    );
}

export default Me;