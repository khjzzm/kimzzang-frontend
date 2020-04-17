import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import PersonalBlog from "../components/page/home";

const HomePage = (props) => {
    return (
        <Layout>
            <SEO/>
            <PersonalBlog/>
        </Layout>
    );
};

export default HomePage;