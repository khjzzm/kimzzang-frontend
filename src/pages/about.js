import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import About from "../components/page/about";

const AboutPage = () => {
    return (
        <Layout>
            <SEO
                title="About"
                description="2020-04-17"
            />
            <About/>
        </Layout>
    );
};

export default AboutPage;