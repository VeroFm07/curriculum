import React from 'react'
import { Helmet } from 'react-helmet';

const Seo = (props) => {
    const {title}=props;

  return (
    <Helmet
        title={title}
    />
  )
}

export default Seo