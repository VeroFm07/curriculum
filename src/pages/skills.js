import React from 'react'
import LayoutBasic from '../Layouts/LayoutBasic'
import './skills.scss';
import { Container } from 'react-bootstrap';
import ListSkills from '../components/ListSkills/ListSkills';
import {
  frontendSkills, frontendColor,
  backendSkills, backendColor,
  versionesSkills, versionesColor,
  sistemasSkills, sistemasColor
} from '../utils/helpSkills';
import Seo from '../components/Seo/Seo';

const skills = () => {

  return (
    <LayoutBasic menuColor="#005db3">
      <Seo title="Conocimientos"/>
      <Container className='container__skills'>
        <section className='container__skills-block'>
          <h2>Frontend</h2>
          <ListSkills skills={frontendSkills} colors={frontendColor} />
        </section>

        <section className='container__skills-block'>
          <h2>Backend</h2>
          <ListSkills skills={backendSkills} colors={backendColor} />
        </section>

        <section className='container__skills-block'>
          <h2>Control de versiones</h2>
          <ListSkills skills={versionesSkills} colors={versionesColor} />
        </section>

        <section className='container__skills-block'>
          <h2>Sistemas operativos</h2>
          <ListSkills skills={sistemasSkills} colors={sistemasColor} />
        </section>
      </Container>
    </LayoutBasic>
  )
}

export default skills
