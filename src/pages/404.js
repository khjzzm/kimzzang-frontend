import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo';
import NotFound from '../components/page/not-found';

const NotFoundPage = (props) => {
    return (
        <Layout>
            <SEO title="404: Not Found" />
            <NotFound />
        </Layout>
    );
};

export default NotFoundPage;
