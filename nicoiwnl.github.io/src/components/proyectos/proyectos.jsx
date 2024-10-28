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
    window.open('https://drive.google.com/drive/folders/1_l6fxTyMrJHUgGWcQJ4vS5LFKXFlk1ao?usp=drive_link', '_blank');
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
            Sistema de gestion de inventario y ventas, realizado para una empresa comercializadora la cual buscaba un sistema completo que le ayudara
            en sus tareas diarias, se implemento Home + Catalogo de Disponibilidad Online.(No se encuentra en linea ni version final debido a que es un proyecto privado)
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
            Trabajo realizado para actividad curricular Base de Datos, se solicito crear un sistema conectado a una base de datos y que funcionara el 
            traspaso de datos entre la BD y el sistema. No existen datos debido a que la interconexion se dio por medio de XAMPP.
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
          <a onClick={redirect2} target="_blank" rel="noopener noreferrer">
          <img className='drive' src={GH} alt="GH" />
          </a>
          <p>
            Pagina realizada por curso Udemy actualizada para 2024 debido a librerias obsoletas, se utilizo la API TMDB la cual permite buscar peliculas y series, ademas de mostrar informacion detallada de cada una.
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
          <h2>Pagina Web Halcón Seguridad</h2>
          <img className='imgproyecto' src={HalconImg} alt="Halcon" />
          <br></br>
          <a onClick={redirect4} target="_blank" rel="noopener noreferrer">
          <img className='drive' src={GH} alt="Drive" />
          </a>
          <p>
            Pagina realizada para una empresa de seguridad NO TERMINADA, se solicito permiso al dueño mientras cuando se realizo un reemplazo, 
            si el dueño quisiera se podria aplicar un sistema de administracion tanto de cursos como atención al cliente.
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
          <h2>Aplicación Movil para Pacientes de HRT</h2>
          <img className='imgproyecto' src={AppLogo} alt="AppLogo" />
          <br></br>
          
          <p>
            Proyecto de Titulo en desarrollo diseñado para ser utilizado en el Hospital Regional de Talca y todo Chile, 
            actualmente se encuentra en fase de Investigación y Desarrollo de Prototipo, se espera que para el 2025 se encuentre desplegada y en su Fase Final.
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
            Si gustas ver la documentación de algunos trabajos o informes universitarios, puedes acceder al drive de Google donde se encuentran alojados.
          </p>
          <img className= 'drive' src= {DriveLogo} onClick={redirect}></img>
          
        </div>
      </div>
    </section>
  );
}

export default Proyectos;