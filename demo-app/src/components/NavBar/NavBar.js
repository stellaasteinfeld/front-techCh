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

import Dashboard from "../../views/Dashboard";
import AlarmsListing from "../../views/AlarmsListing";
import './NavBar.scss';

export default function NavBar() {
    return (
        <Router>
            <>
                <Navbar bg="light" expand="lg" className="leftNav">
                    <Container  className="flex-column">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto flex-column">
                                <Link to="/">Dashboard</Link>
                                <Link to="/alarms">Alarms</Link>
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
