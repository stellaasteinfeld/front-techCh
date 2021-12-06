import React from "react";

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

import './FixedTopNav.scss';

export default function NavBar() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand>Technical Challenge</Navbar.Brand>
                <div className="justify-content-end">
                    <FontAwesomeIcon icon={faBell} />
                    <Badge pill bg="danger">
                        5
                    </Badge>
                </div>
            </Container>
        </Navbar>
    );
}
