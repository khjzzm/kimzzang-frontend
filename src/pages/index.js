import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import PersonalBlog from "../components/page/home";

const HomePage = () => {
    return (
        <Layout>
            <SEO
                title="Home"
                description="홈페이지"
            />
            <PersonalBlog/>
        </Layout>
    );
};

export default HomePage;