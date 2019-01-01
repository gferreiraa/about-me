import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="error__page">
    <div className="container ">
        <h1 className="text-centered paragraph__about is-size-2 error__page--title"><b>NOT FOUND, 😰</b></h1>
        <p className="paragraph__about">You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
    </div>
  </Layout>
);

export default NotFoundPage;
