import React, {useState} from "react";
import MockBackend from '../../mockdata';
import AddAlarm from "./AddAlarm";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";

import './AlarmsListing.scss';

export default function AlarmsListing() {
    const [alarms, setAlarms] = useState(MockBackend.listAlarms);

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
                            <option value="1">Paused</option>
                            <option value="2">Running</option>
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
                {alarms.map(alarm =>
                    (<tr>
                        <td>{alarm.name}</td>
                        <td>{alarm.source}</td>
                        <td>{alarm.metric}</td>
                        <td>{alarm.triggerValue}</td>
                        <td>{alarm.paused === 0 ? 'False' : 'True'}</td>
                        <td>
                            <Dropdown>
                                <Dropdown.Toggle variant="light" id="dropdown-basic">
                                    <FontAwesomeIcon icon={faEllipsisV} />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setAlarms({paused: 1 - alarm.paused})}>{alarm.paused === 0 ? 'Resume' : 'Pause'}</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>)
                )}
                </tbody>
            </Table>
            <AddAlarm createAlarm={MockBackend.addAlarm}/>
        </Container>
    );
}