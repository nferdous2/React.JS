import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png'
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container className="">
                    <Link to="/home"><img style={{ width: '150px' }} src={logo} alt="" /></Link>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Link to="/cart"><i className="fas fa-shopping-cart shopping_cart"></i></Link>
                        {user?.email && <Navbar.Text>
                            Signed in as: <a href="#login">{user.displayName}</a>
                        </Navbar.Text>}
                        {user?.email ? <button className="logout_btn" onClick={logOut}>Logout</button>
                            :

                            <div>
                                <Link to="/login">Login</Link>
                                <Link className="ms-3 signUp" to="/register">Sign up</Link>
                            </div>



                        }
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;