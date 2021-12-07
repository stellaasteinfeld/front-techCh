import React, {useState} from "react";
import MockBackend from '../../mockdata';
import AddAlarm from "./AddAlarm";
import TableAlarm from "./AlarmsTable";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

import './AlarmsListing.scss';

export default function AlarmsListing() {
    const [alarms, setAlarms] = useState(MockBackend.listAlarms);

    function refreshAlarmsTable(){
        setAlarms(MockBackend.listAlarms());
    }

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
            <TableAlarm alarms={alarms} setAlarms={setAlarms} deleteAlarm={MockBackend.removeAlarm} refreshAlarmsTable={refreshAlarmsTable} />
            <AddAlarm createAlarm={MockBackend.addAlarm} refreshAlarmsTable={refreshAlarmsTable} />
        </Container>
    );
}