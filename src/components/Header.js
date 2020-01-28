import React, {Component} from "react";
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <NavLink exact to="/" className="item" activeClassName="active">home</NavLink>
                <NavLink to="/about/123" className="item" activeClassName="active">about</NavLink>
                <NavLink to="/search" className="item" activeClassName="active">search</NavLink>
                <NavLink to="/postsList" className="item" activeClassName="active">postsList</NavLink>
                <NavLink to="/memberList" className="item" activeClassName="active">memberList</NavLink>
                <NavLink to="/colorWithRedux" className="item" activeClassName="active">colorWithRedux</NavLink>
                <NavLink to="/TodosList" className="item" activeClassName="active">TodosList</NavLink>
            </div>
        )
    }
}

export default Header