import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Contact from "../components/page/contact";

const ContactPage = () => {
    return (
        <Layout>
            <SEO
                title="Contact"
                description="연락"
            />
            <Contact/>
        </Layout>
    );
};

export default ContactPage;