import React from 'react'
import './AboutMe.scss';
import { Container, Button } from 'react-bootstrap';
import CV from '../../images/pdf/CV.pdf';

const AboutMe = () => {
  return (
    <Container className='container__about'>
        <p>
        Soy desarrolladora frontend, con un enfoque que abarca conocimientos en las
        siguientes áreas: manejo de tecnologías que ayudan y soportan el diseño y desarrollo
        de aplicaciones ya sean para la web o dispositivos móviles. Todo esto con el fin de llevar
        a cabo la automatización de procesos de un proyecto específico, basado en los
        requerimientos que solicite el cliente. Me caracterizo por ser una persona disciplinada,
        organizada, sociable, perseverante, comprometida, honesta y responsable. Soy muy
        buena para trabajar en equipo, me adapto fácilmente a cualquier situación que se
        presente, me gusta ser creativa y hacer cosas nuevas. Mis expectativas y objetivos a
        nivel laboral son aprender y crecer mucho enfrentándome a retos nuevos, aprendiendo
        cada día para fortalecer mi conocimiento. Quiero ser muy buena en lo que hago para
        tener la posibilidad de escalar a nuevos cargos.
        </p>

        <hr />

        <a href={CV} target="_blank">
            <Button variant="primary" className='container__about-button'>Descargar hoja de vida</Button>
        </a>
    </Container>
  )
}

export default AboutMe
