import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements'

const index = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Mejakreatif</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="works">Works</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="journal">Journal</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contacts">Contacts</NavLinks>
                        </NavItem>
                    </NavMenu>
                    {/* 46:00 */}
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default index
