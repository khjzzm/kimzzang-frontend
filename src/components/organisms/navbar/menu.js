import React from 'react';
import {MenuItemWrapper, MenuItem} from './navbar.style';
import {NavLink} from "react-router-dom";

const Menu = ({items, className, ...props}) => {
    // Add all classs to an array
    const addAllClasses = ['menu'];

    // className prop checking
    if (className) {
        addAllClasses.push(className);
    }

    return (
        <MenuItemWrapper className={addAllClasses.join(' ')} {...props}>
            {items.map((item, index) => (
                <MenuItem key={index}>
                    {item.external ? (
                        <a href={item.url}>{item.label}</a>
                    ) : (
                        <NavLink exact to={item.url} activeClassName="active-link">
                            {item.label}
                        </NavLink >
                    )}
                </MenuItem>
            ))}
        </MenuItemWrapper>
    );
};

export default Menu;
