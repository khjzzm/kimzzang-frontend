import React from 'react';
import Sticky from 'react-stickynode';
import {ThemeProvider} from 'styled-components';
import {theme} from '../theme/index';
import ResetCss from './reset-css';
import Navbar from './organisms/navbar/navbar';
import Footer from './organisms/footer/footer';

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
                    <a href="https://zzang.kim/"> ZZM, Inc.</a>
                </Footer>
            </>
        </ThemeProvider>
    );
};

export default Layout;