import React from 'react';
import './Profile.scss';
import { Container, Row, Col, Image } from 'react-bootstrap';
import foto from "../../images/foto.png";
import Social from './Social';

const Profile = () => {

    const data = [
        {
            title: "Edad:",
            description: "19",
        },
        {
            title: "Teléfono:",
            description: "+57 304 611 17 20",
        },
        {
            title: "Email:",
            description: "veronicafrancomejia84@gmail.com",
        },
        {
            title: "Dirección:",
            description: "Carrera 49 # 141 A Sur 08",
        },
      
    ]
    console.log(data)
    return (
        <div className='profile'>
            <article className='profile__fondo'></article>
            <div className='profile__dark'></div>
            <Container className='box'>
                <Row className='box__info'>

                    {/*xs: mobile, md: tablet, prop fluid para que la imagen se adapte */}
                    <Col xs={12} md={4}>
                        <Image src={foto} fluid></Image>
                    </Col>

                    <Col xs={12} md={8} className="box__data">
                        <span>¡HOLA!</span>
                        <p>Maria Veronica Franco Mejía</p>
                        <p className='title__ocupation'>Frontend Developer</p>
                        <hr />

                        <section className='box__data__information'>
                            {
                                data.map((item, index) => (
                                    <div key={index} className='box__data__information-item'>
                                        <p>{item.title}</p>
                                        <p>{item.description}</p>
                                    </div>
                                ))
                            }

                        </section>

                    </Col>
                </Row>
                <Social />
            </Container>
        </div>
    );
}

export default Profile;
