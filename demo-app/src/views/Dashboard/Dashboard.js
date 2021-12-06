import React from "react";
import './Dashboard.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

export default function Dashboard() {
    return (
        <Container className="dashboard">
            <Row xs={2}>
                <Col>
                    <Card border="secondary" style={{ width: '18rem' }}>
                        <Card.Header>Alarms</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                n/n Alarms Turned
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card border="secondary" style={{ width: '18rem' }}>
                        <Card.Header>Other Widget</Card.Header>
                        <Card.Body>
                            <Card.Text>
                               Just another widget to be implemented in future sprints
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}