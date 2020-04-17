import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => {
    return <div>로딩중...</div>;
};

const Home = Loadable({
    loader: () => import('../pages/index'),
    loading: Loading
});
const About = Loadable({
    loader: () => import('../pages/about'),
    loading: Loading
});
const Contact = Loadable({
    loader: () => import('../pages/contact'),
    loading: Loading
});

export default {
    'Home': {path: "/", title: "home", main: Home, exact: true},
    'About': {path: "/About", title: "About", main: About, exact: true},
    'Contact': {path: "/Contact", title: "Contact", main: Contact, exact: true},
}
