import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList } from '@fortawesome/free-solid-svg-icons';

import Dashboard from "../../views/Dashboard";
import AlarmsListing from "../../views/AlarmsListing";
import './NavBar.scss';

export default function NavBar() {
    return (
        <Router>
            <>
                <Navbar fixed="top" bg="light" expand="lg" className="leftNav">
                    <Container  className="flex-column">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto flex-column">
                                <Link to="/" className="leftNav--buttons btn btn-outline-dark"><FontAwesomeIcon icon={faHome} /></Link>
                                <Link to="/alarms" className="leftNav--buttons btn btn-outline-dark"><FontAwesomeIcon icon={faList} /></Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path='/' element={<Dashboard/>} />
                    <Route path='/alarms' element={<AlarmsListing/>} />
                </Routes>
            </>
        </Router>
    );
}
