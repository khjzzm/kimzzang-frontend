import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => {
    return <div>로딩중...</div>;
};

const HomePage = Loadable({
    loader: () => import('../pages/index'),
    loading: Loading
});
const AboutPage = Loadable({
    loader: () => import('../pages/about'),
    loading: Loading
});
const ContactPage = Loadable({
    loader: () => import('../pages/contact'),
    loading: Loading
});

export default {
    'Home': {path: "/", title: "home", main: HomePage, exact: true},
    'About': {path: "/About", title: "About", main: AboutPage, exact: true},
    'Contact': {path: "/Contact", title: "Contact", main: ContactPage, exact: true},
}
