import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';
import './Menu.scss';

const Menu = (props) => {

    //Recibe por props el color del menu y su valor es la prop recibida y asignada en el layout
    const { menuColorStyle } = props;
    const itemsMenu = [
        {
            to: "/",
            title: "Inicio",
        },
        {
            to: "/skills",
            title: "Conocimientos",
        },
        {
            to: "/projects",
            title: "Proyectos",
        }
    ];

    return (
        <header className='menu' style={{ backgroundColor: menuColorStyle || 'transparent' }}>
            <Container>
                <ul className='menu__ul'>
                    {
                        itemsMenu.map((item,index) =>(
                            <li className='menu__li' key={index}>
                                <Link to={item.to} className='menu__li__link'>{item.title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </Container>
        </header>
    )
}

export default Menu
