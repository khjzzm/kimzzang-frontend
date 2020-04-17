import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import PersonalBlog from "../components/page/home";

const HomePage = () => {
    return (
        <Layout>
            <SEO
                title="Home"
                description="StoryHub is a beautiful Gatsby Blog theme designed to showcase your work in style. Perfect for designers, artists, photographers and developers to use for their portfolio website."
            />
            <PersonalBlog/>
        </Layout>
    );
};

export default HomePage;