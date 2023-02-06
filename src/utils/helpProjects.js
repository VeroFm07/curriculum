import Pokedex from '../images/projects/Pokedex.jpg';
import Spotify from '../images/projects/Spotify.jpg';
import Curriculum from '../images/projects/Curriculum.jpg';
import Blog from '../images/projects/Blog.jpg';

export default [
    {
        title:"Pokédex",
        description:"Este es un proyecto en el cual se realiza la tarjeta de un pokemon teniendo en cuenta sus habilidades, todo esto construido en base a HTML, CSS y haciendo uso de la metodología BEM.",
        urlRepo: "https://gitlab.com/veronica.franco/pokedex",
        image: Pokedex,
    },
    {
        title:"My Music App",
        description:"Este es un proyecto en el cual se consume la API de spotify para crear una aplicación que permita agregar y eliminar canciones de favoritos; todo esto construido en React JS.",
        urlRepo: "https://gitlab.com/veronica.franco/mymusicapp",
        image: Spotify,
    },
    {
        title:"Curriculum",
        description:"Este es un proyecto en el cual se maqueta mi curriculum personal, describiendo mis conocimientos y pudiendo descargar mi hoja de vida; esta construido en Gatsby.",
        urlRepo: "https://gitlab.com/veronica.franco/curriculum_gatsby/-/tree/master",
        image: Curriculum,
    },
    {
        title:"Blog developer",
        description: "Este es un proyecto construido en Gatsby y Contentful, el cual recomienda una serie de post sobre nuevas funcionalidades en la programación y las últimas actualizaciones.",
        urlRepo: "https://gitlab.com/veronica.franco/blog_gatsby/-/tree/master",
        image: Blog,
    }
];
