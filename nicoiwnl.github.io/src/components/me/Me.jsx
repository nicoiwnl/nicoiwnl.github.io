import './Mestyles.css'; // Importa el archivo CSS sin usar 'styles from'
import React from 'react';
import MeImg from '../../assets/MeImg.png';
import LightModeIcon from '@mui/icons-material/LightMode';
import LK from '../../assets/LK.png';
import IG from '../../assets/IG.png';
import FB from '../../assets/FB.png';
import GH from '../../assets/GH.png';
import CV from '../../assets/CV-NicolasOpazo.pdf';

function Me() {
    return (
        <section id='Me' className= 'Contenedor'> 
            <div className='ColorContenedor'>
                <img className='circularImage' src={MeImg} alt="Me"/>
                
            </div>
            <div className='Info'>
              <h1> Nicolás<br/>Opazo</h1>
              <br/>
              <h2>Estudiante en Busca de Practica </h2>
              <h2>Carrera A Fin </h2>
              <br/>
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
                Tengo conocimientos en Python y SQL, Desarrollo Web e Inteligencia de Negocios.
                Como hobbies me gusta escuchar música, los videojuegos y el descenso. 
                Actualmente estoy aprendiendo Desarrollo de Aplicaciones Moviles e Inteligencia Artificial
              <br/>
              <br />
              
                
                
                Te invito a ver mi CV, mis proyectos de GitHub y los cursos que he realizado, que tengas un buen dia.
              </p>
              <a href={CV}>
                <button className='hover' download>Descargar CV</button>
              </a>
              <br></br>
              <a href='https://drive.google.com/drive/folders/10r80GhhXL7x2QlXBEjFWsku6epTDDTcc?usp=drive_link'>
                <button className='hover' >Certificados</button>
              </a>
              
              
              <br />
              <br />
              <br />
            </div>
        </section>
    );
}

export default Me;