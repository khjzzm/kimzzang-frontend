import React from 'react';
import ResetCss from '../components/reset-css';
import Layout from '../components/layout'
import SEO from '../components/seo';
import NotFound from '../components/page/not-found';

const NotFoundPage = (props) => {
    return (
        <Layout>
            <ResetCss />
            <SEO title="404: Not Found" />
            <NotFound />
        </Layout>
    );
};

export default NotFoundPage;
