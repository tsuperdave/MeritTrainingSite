import { signOut } from '@firebase/auth';
import React, { useContext } from 'react';
import { Nav, NavDropdown, Navbar, Container, Dropdown } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { AuthorizationContext } from '../auth';
import { fbAuth } from '../firebase';
import './index.css';

export default function NavbarMain(props) {

    const [user, setUser] = useContext(AuthorizationContext);

    return (
        <>
            <Navbar fixed={props.fixed} expand={props.expand} bg={props.bg} variant={props.variant}>
                <Container>
                    <LinkContainer to="/">                     
                        <Navbar.Brand href='/login'>
                        <img 
                            className='d-inline-block align-top px-2'
                            src={props.logo}
                            alt='logo'
                            height='35'
                        />
                        </Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
                        <Navbar.Collapse id="navbar-nav-collapse" className="justify-content-end">
                        
                        <Nav className="mr-1">
                            {user.token && (
                            <NavDropdown id="dropdown" title="More" alignRight={true}>
                                <LinkContainer to="/preferences">
                                    <NavDropdown.Item active={false}>Preferences</NavDropdown.Item>
                                </LinkContainer>

                                <LinkContainer to="/learningTrack">
                                    <NavDropdown.Item active={false}>Hire Track</NavDropdown.Item>
                                </LinkContainer>

                                {user.role == 'admin' && (
                                    <LinkContainer to="/accounts">
                                    <NavDropdown.Item active={false}>Admin Dashboard</NavDropdown.Item>
                                </LinkContainer>
                                )}

                                <Dropdown.Divider />

                                <LinkContainer to="/login">
                                    <NavDropdown.Item
                                        active={false}
                                        onClick={(e) => {                     
                                        signOut(fbAuth)
                                            .then(() => {
                                                setUser({
                                                    uid: '',
                                                    token: '',
                                                    email: '',
                                                    displayName: '',
                                                    phoneNumber: '',
                                                    photoURL: '',
                                                    role: '',
                                                    isLoggedIn: false
                                                })
                                            })
                                        
                                        
                                        }}
                                        // onClick={logout}
                                    >Sign Out</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                            )}
                        
                            {/* {!user.isLoggedIn && (
                            <LinkContainer to="/login">
                                <Nav.Link active={false}>Sign in</Nav.Link>
                            </LinkContainer>
                            )} */}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

