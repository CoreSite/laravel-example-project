import * as React from "react";
import {Link} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

export default class NavHeader extends React.Component {
    render() {
        return <Navbar className="navbar navbar-expand-md navbar-light navbar-laravel">
            <div className="container">
                <NavbarBrand className="navbar-brand" href="/">Laravel</NavbarBrand>
                <Collapse isOpen={true} navbar>
                    <Nav className="navbar-nav">
                        <NavItem>
                            <Link className="nav-link" to={'/'}>Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to={'/posts'}>News</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    }
}
