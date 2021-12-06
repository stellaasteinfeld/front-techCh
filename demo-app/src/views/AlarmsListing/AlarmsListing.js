import React, {useState} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faPlus } from '@fortawesome/free-solid-svg-icons';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";


import './AlarmsListing.scss';

export default function AlarmsListing() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container className="alarms">
            <h1>Alarms</h1>
            <Form>
                <Row className="align-items-center">
                    <Col xs="auto">
                        <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                            Name
                        </Form.Label>
                        <Form.Control
                            className="mb-2"
                            id="inlineFormInput"
                            placeholder="Jane Doe"
                        />
                    </Col>
                    <Col xs="auto">
                        <Form.Label
                            className="me-sm-2"
                            htmlFor="inlineFormCustomSelect"
                            visuallyHidden
                        >
                            Status
                        </Form.Label>
                        <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                            <option value="0">Status</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>
                    <Col xs="auto">
                        <Button type="submit" className="mb-2">
                            Search
                        </Button>
                    </Col>
                </Row>
            </Form>
            <Table className="alarms--table" striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Source</th>
                    <th>Metric</th>
                    <th>Trigger</th>
                    <th>Paused</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                <FontAwesomeIcon icon={faEllipsisV} />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </td>
                </tr>
                </tbody>
            </Table>
            <Button variant="primary" className="alarms--new" onClick={handleShow}>
                <FontAwesomeIcon icon={faPlus} />
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}