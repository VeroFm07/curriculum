import React from 'react'
import Menu from '../components/Menu';

const LayoutBasic = (props) => {
    //Recibe por props el children: el contenido que van a tener los demas componentes en los cuales se llame el layout
    //menuColor: el color del menu que se le asigna en cada componente 
    const { children, menuColor } = props;

    return (
        <>
            <Menu menuColorStyle= {menuColor}/>
            {children}
        </>

    )
}

export default LayoutBasic
