import React, {useState} from 'react';
import {DrawerProvider} from '../../molecules/drawer/drawerContext';
import {Link} from "react-router-dom";
import { IoIosSearch, IoIosClose } from 'react-icons/io';
import Menu from './menu';
import MobileMenu from './mobileMenu';
import SearchContainer from '../search/search';
import HeaderWrapper, {
    NavbarWrapper,
    Logo,
    MenuWrapper,
    NavSearchButton,
    NavSearchWrapper,
    SearchCloseButton,
    NavSearchFromWrapper,
} from './navbar.style';

const MenuItems = [
    {
        label: 'Home',
        url: '/',
    },
    {
        label: 'About',
        url: '/about',
    },
    {
        label: 'Contact',
        url: '/contact',
    }
];

const Navbar = ({className, ...props}) => {
    const [state, setState] = useState({
        toggle: false,
        search: '',
    });

    const toggleHandle = () => {
        setState({
            ...state,
            toggle: !state.toggle,
        });
    };

    // Add all classs to an array
    const addAllClasses = ['header'];

    // className prop checking
    if (className) {
        addAllClasses.push(className);
    }

    return (
        <HeaderWrapper className={addAllClasses.join(' ')} {...props}>
            <NavbarWrapper className="navbar">
                <DrawerProvider>
                    <MobileMenu items={MenuItems} logo={"https://kimzzang-image-bucket.s3.ap-northeast-2.amazonaws.com/images/logo.png"}/>
                </DrawerProvider>
                <Logo>
                    <Link to="/">
                        <img src={"https://kimzzang-image-bucket.s3.ap-northeast-2.amazonaws.com/images/logo.png"} alt="logo"/>
                    </Link>
                </Logo>
                <MenuWrapper>
                    <Menu items={MenuItems}/>
                </MenuWrapper>
                <NavSearchButton
                    type="button"
                    aria-label="search"
                    onClick={toggleHandle}
                >
                    <IoIosSearch size="23px"/>
                </NavSearchButton>
            </NavbarWrapper>

            <NavSearchWrapper className={state.toggle === true ? 'expand' : ''}>
                <NavSearchFromWrapper>
                    <SearchContainer/>
                    <SearchCloseButton
                        type="submit"
                        aria-label="close"
                        onClick={toggleHandle}
                    >
                        <IoIosClose/>
                    </SearchCloseButton>
                </NavSearchFromWrapper>
            </NavSearchWrapper>
        </HeaderWrapper>
    );
};

export default Navbar;