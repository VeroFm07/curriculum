import React from 'react'
import './Social.scss';

/*----------ICONS----------*/
import { ReactComponent as IconFacebook } from '../../../images/icons/facebook.svg';
import { ReactComponent as IconInstagram } from '../../../images/icons/instagram.svg';
import { ReactComponent as IconLinkedin } from '../../../images/icons/linkedin.svg';


const Social = () => {

    const socialMedia = [
        {
            icon: <IconFacebook />,
            link: "https://www.facebook.com/profile.php?id=100007997324876&mibextid=ZbWKwL",
        },
        {
            icon: <IconInstagram />,
            link: "https://instagram.com/vero_m07?igshid=ZDdkNTZiNTM=",
        },
        {
            icon: <IconLinkedin />,
            link: "https://www.linkedin.com/in/mar%C3%ADa-veronica-franco-mej%C3%ADa-91238424b/"
        }
    ];
    
    return (
        <div className='container__social'>
            {
                socialMedia.map((item, index) => (
                    <a href={item.link} key={index} target="_blank" rel="noreferrer noopener">
                        {item.icon}
                    </a>
                ))
            }
        </div>
    )
}

export default Social
