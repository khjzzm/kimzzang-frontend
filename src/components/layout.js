import React from 'react';
import Sticky from 'react-stickynode';
import {ThemeProvider} from 'styled-components';
import {theme} from '../theme/index';
import ResetCss from './resetCss';
import Navbar from './organisms/navbar/navbar';
import Footer from './organisms/footer/footer';
import ScrollToTop from 'react-scroll-up';
import ScrollUpButton from "./molecules/scroll-up-button/scroll-up-button";

const Layout = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <ResetCss/>
                <Sticky top={0} innerZ={9999} activeClass="nav-sticky">
                    <Navbar/>
                </Sticky>
                {children}
                <Footer>
                    Copyright &copy; {new Date().getFullYear()}
                    <a href="https://zzang.kim/"> Flash Design, Inc.</a>
                </Footer>
                <ScrollToTop
                    showUnder={300}
                    duration={700}
                    easing="easeInOutCubic"
                    style={{bottom: 30, right: 20}}
                >
                    <ScrollUpButton/>
                </ScrollToTop>
            </>
        </ThemeProvider>
    );
};

export default Layout;