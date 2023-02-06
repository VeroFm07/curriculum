import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import LayoutBasic from '../Layouts/LayoutBasic'
import './projects.scss';
import helpProjects from '../utils/helpProjects';
import Seo from '../components/Seo/Seo';

const projects = () => {

  return (
    <LayoutBasic menuColor="#144f85">
      <Seo title="Proyectos" />
      <Container className='container__projects'>
        <h1 className='title'>Proyectos</h1>

        {/*xs: mobile, sm: mayor a 576px, md: tablet, prop fluid para que la imagen se adapte */}
        <Row>
          {
            helpProjects.map((item, index) => (

              <Col xs={12} sm={4} className="container__projects-col" key={index}>
                <Card>
                  <section className='container__projects-card' style={{backgroundImage: `url("${item.image}")`}}></section>
                  <Card.Body>

                    <Card.Title className='title__card'>
                      {item.title}
                    </Card.Title>

                    <Card.Text className='title__card-description'>
                      {item.description}
                    </Card.Text>

                    <a href={item.urlRepo} target="_blank" className='container__projects-link'>
                      <Button variant='primary' className='container__projects-button'>Ver repositorio</Button>
                    </a>

                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    </LayoutBasic>
  )
}

export default projects
