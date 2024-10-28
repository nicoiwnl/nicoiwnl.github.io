import React from 'react';
import './proyectosstyles.css';
import GH from '../../assets/GH.png';
import ReactLogo from '../../assets/REACT.png';
import APILogo from '../../assets/API.png';
import MUILogo from '../../assets/MUI.png';
import HalconImg from '../../assets/Halcon.png';
import CSSLogo from '../../assets/CSS.png'; 
import HTMLLogo from '../../assets/HTML.png';
import MySQLLogo from '../../assets/MYSQL.png';
import DjangoLogo from '../../assets/DJANGO.png';
import OracleLogo from '../../assets/ORACLE.png';
import PhpLogo from '../../assets/PHP.png';
import PreguntaLogo from '../../assets/pregunta.png';
import AppLogo from '../../assets/Applogo.webp'
import DriveLogo from '../../assets/DRIVE.png';
import LPF from '../../assets/LPF.png';
import pewen from '../../assets/pewen.jpg';
import PELIS from '../../assets/pelis.webp';

function Proyectos() {

  const redirect = () => {
    window.open('https://drive.google.com/drive/folders/1_l6fxTyMrJHUgGWcQJ4vS5LFKXFlk1ao?usp=sharing ', '_blank');
  }
  const redirect1 = () => {
    window.open('https://drive.google.com/drive/u/0/folders/1NmTg0hVmyIWM8altc5zwkQo1rs63l6dS', '_blank');
  }
  const redirect2 = () => {
    window.open('https://github.com/Felipe-Islas-UCM/SGIV-F', '_blank');
  }
  const redirect3 = () => {
    window.open('https://github.com/nicoiwnl/peliculasreact-udemy', '_blank');
  }
  const redirect4 = () => {
    window.open('https://github.com/nicoiwnl/Sistema-HalconSeguridad', '_blank');
  }
  const redirect5 = () => {
    window.open('', '_blank');
  }

  return (
    <section id="proyectos" className="Contenedor">
      <h1 className="sectionTitle">Proyectos</h1>
      <div className="proyectosContainer">

      <div className="proyecto1">
          <h2>SGIV Comercial Pewen</h2>
          <img className='imgproyecto' src={pewen} alt="ComercialPewen" />
          <br></br>
          <a onClick={redirect2} target="_blank" rel="noopener noreferrer">
          <img className='drive' src={GH} alt="Drive" />
          </a>
          <p>
          Sistema de gestión de inventario y ventas, realizado para una empresa comercializadora que buscaba un sistema completo para asistir en sus tareas diarias. Se implementó una página de inicio 
          (Home) y un catálogo de disponibilidad en línea. (No se encuentra en línea ni en versión final, ya que es un proyecto privado).
          </p>
          <br/>
          <span>

            <img src= {ReactLogo} alt="ReactLogo" />
            <img src= {MUILogo} alt="MUILogo" />
            <img src= {DjangoLogo} alt="DjangoLogo" />
            <img src={MySQLLogo} alt="MySQLLogo" />
          </span>
        </div>

        <br/>
        <br/>
        

      <div className="proyecto2">
          <h2>Buses LPF</h2>
          <img className='imgproyecto' src={LPF} alt="LPF" />
          <br></br>
          <a onClick={redirect1} target="_blank" rel="noopener noreferrer">
          <img className='drive' src={GH} alt="Drive" />
          </a>
          <p>
          Trabajo realizado para la actividad curricular de Base de Datos. Se solicitó crear un sistema conectado a una base de datos y que permitiera el traspaso de datos entre la
          BD y el sistema. No existen datos almacenados, ya que la interconexión se realizó mediante XAMPP.
          </p>
          <br/>
          <span>

            <img src= {HTMLLogo} alt="HTMLLogo" />
            <img src= {CSSLogo} alt="CSSLogo" />
            <img src= {PhpLogo} alt="PHPLogo" />
            <img src= {OracleLogo} alt="MySQLLogo" />
          </span>
        </div>

        <br/>
        <br/>

        <div className="proyecto3">
          <h2>Buscador de Peliculas</h2>
          <img className='imgproyecto' src={PELIS} alt="peliculas" />
          <br></br>
          <a onClick={redirect3} target="_blank" rel="noopener noreferrer">
          <img className='drive' src={GH} alt="GH" />
          </a>
          <p>
          Página realizada a partir de un curso de Udemy, actualizada para 2024 debido a librerías obsoletas. 
          Se utilizó la API de TMDB, la cual permite buscar películas y series, además de mostrar información detallada de cada una.
          </p>
          <br/>
          <span>

            <img src= {ReactLogo} alt="ReactLogo" />
            <img src= {APILogo} alt="APILogo" />
            <img src= {MUILogo} alt="MUILogo" />
            
          </span>
        </div>

        <br/>
        <br/>


        <div className="proyecto4">
          <h2>Página Web Halcón Seguridad</h2>
          <img className='imgproyecto' src={HalconImg} alt="Halcon" />
          <br></br>
          <a onClick={redirect4} target="_blank" rel="noopener noreferrer">
          <img className='drive' src={GH} alt="Drive" />
          </a>
          <p>
          Página realizada para una empresa de seguridad (NO TERMINADA). Se solicitó permiso al dueño al realizar un reemplazo.
          Si el dueño lo desea, se podría implementar un sistema de administración tanto para los cursos como para la atención al cliente.
          </p>
          <br/>
          <span>

            <img src= {ReactLogo} alt="ReactLogo" />
            <img src= {MUILogo} alt="MUILogo" />
          </span>
        </div>
        <br/>
        <br/>

        <div className="proyecto5">
          <h2>Aplicación Móvil para Pacientes de HRT</h2>
          <img className='imgproyecto' src={AppLogo} alt="AppLogo" />
          <br></br>
          
          <p>
          Proyecto de título en desarrollo, diseñado para ser utilizado en el Hospital Regional de Talca y en todo Chile. Actualmente, se encuentra en fase de investigación 
          y desarrollo de prototipo, y se espera que para el 2025 esté desplegado y en su fase final.
          </p>
          <br/>
          <span>

            <img src= {PreguntaLogo} alt="Pregunta" />
            <img src= {PreguntaLogo} alt="Pregunta" />
            <img src= {PreguntaLogo} alt="Pregunta" />
            <img src= {PreguntaLogo} alt="Pregunta" />

          </span>
        </div>
        <br/>
        <br/>
        <div className="proyecto6">
          <h2>Documentos e Informes Universitarios</h2>
          <br></br>
          <p>
          Si deseas ver algunas de mis presentaciones o informes universitarios, tanto grupales como individuales, puedes acceder a Google Drive, donde están alojados.
          </p>
          <img className= 'drive' src= {DriveLogo} onClick={redirect}></img>
          
        </div>
      </div>
    </section>
  );
}

export default Proyectos;