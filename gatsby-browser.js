import 'bootstrap/dist/css/bootstrap.min.css';
import './src/pages/index.scss';

//Función para que el modo offline funcione en la página web (se vea el contenido asi no tenga conexión)
export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
        `This application has been updated. ` +
        `Reload to display the latest version?`
    )

    if (answer === true) {
        window.location.reload()
    }
}
