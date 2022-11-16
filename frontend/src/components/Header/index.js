import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Link, useLocation } from 'react-router-dom';
import useOutsideClick from '../../hooks/useOutsideClick';

const NavBar = styled('nav')`
    min-height: 64px;
    padding: 0px 24px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f2a900;
    position: relative;
`;

const NavList = styled('ul')`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;

    @media (max-width: 600px) {
        position: fixed;
        flex-direction: column;
        top: 0;
        left: 0;
        width: 70vw;
        transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
        box-shadow: rgb(0 0 0 / 20%) 0px 8px 10px -5px, rgb(0 0 0 / 14%) 0px 16px 24px 2px, rgb(0 0 0 / 12%) 0px 6px 30px 5px;
        height: 100%;
        flex: 1 0 auto;
        z-index: 1200;
        position: fixed;
        outline: 0px;
        overflow-y: auto;
        background-color: rgb(40, 44, 52);
        padding: 24px;
    }
`;

const NavItem = styled('li')`
    width: fit-content;
    margin-right: 24px;
    border: 1px solid #f2a900;
    background-color: #f2a900;
    padding: 4px 10px;
    border-radius: 4px;
    text-transform: uppercase;
    min-width: 64px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
    cursor: pointer;
    padding: 0;
    display: flex;

    &:hover {
        background: transparent;
    }
    
    &:last-of-type {
        margin-right: 0;
    }

    @media (max-width: 600px) {
        margin: 0 0 24px 0;
        width: initial;
    
        &:last-of-type {
            margin: 0;
        }
    }
`;

const NavLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    outline: 0px;
    margin: 0px;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.9375rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    min-width: 64px;
    padding: 2px 12px;
    border-radius: 4px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
    border: 1px solid rgb(242, 169, 0);
    background-color: rgb(242, 169, 0);
    color: rgb(77, 77, 78);

    &:hover {
        color: #f2a900;
        background-color: transparent;
    }

    @media (max-width: 600px) {
        width: 100%;
        padding: 8px 22px;
    }
`;

const MenuBtnComponent = styled('div')`
    height: 3px;
    background-color: #f2a900;
    margin-bottom: 6px;

    &:last-of-type {
        margin-bottom: 0;
    }
`;

const Button = styled('button')`
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;

    @media (min-width: 600px) {
        display: none;
    }
`;

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const openDrawer = (event) => {
        setMobileOpen(true);
        event.stopPropagation();
    };


    const handleOutsideClick = () => {
        setMobileOpen(false);
    }

    const ref = useOutsideClick(handleOutsideClick);

    const location = useLocation();

    useEffect(() => {
        setMobileOpen(false);
    }, [location.pathname]);

    return (
        <NavBar 
            position="relative" 
            component="nav"
        >
            <Button 
                onClick={openDrawer}
                style={{ width: '1.5em' }}
            >
                <MenuBtnComponent />
                <MenuBtnComponent />
                <MenuBtnComponent />
            </Button>
            <NavList
                open={mobileOpen}
                ref={ref}
            >
                <NavItem>
                    <NavLink
                        className="nav-button"
                        to="/"
                    >
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className="nav-button"
                        to="/about"
                    >
                        About
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className="nav-button"
                        to="/terms-conditions"
                    >
                        Terms and conditions
                    </NavLink>
                </NavItem>
            </NavList>
        </NavBar>
    )
}

export default Header;