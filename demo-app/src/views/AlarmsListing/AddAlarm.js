import React, {useReducer, useState} from "react";

import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';

export default function AddAlarm({createAlarm, refreshAlarmsTable}) {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        source: '',
        metric: '',
        triggerValue: 0,
        paused: 0
    });
    const [validated, setValidated] = useState(false);
    const forceUpdate = useReducer(() => ({}))[1];

    function refreshComponent(){
        refreshAlarmsTable();
        forceUpdate();
    }
    const handleClose = () => setShow(false);

    function handleChange(event) {
        let { name, value } = event.target;
        if(name === 'triggerValue') {
            value = parseInt(value);
        }
        if(name === 'paused') {
            if(value === true) {
                value = 1;
            } else {
                value = 0;
            }
        }
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            setValidated(true);
        } else {
            createAlarm(...[formData]);
            setFormData({
                name: '',
                source: '',
                metric: '',
                triggerValue: 0,
                paused: 0
            });
            setValidated(false);
        }
        refreshComponent();
        setShow(false);
    }

    return(
        <>
            <Button variant="primary" className="alarms--new" onClick={() => setShow(true)}>
                <FontAwesomeIcon icon={faPlus} />
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a new Alarm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group controlId="alarmName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control value={formData.name} onChange={handleChange} name="name" type="text" placeholder="Enter alarm name" required />
                        </Form.Group>
                        <Form.Group controlId="alarmSource">
                            <Form.Label>Source:</Form.Label>
                            <Form.Control value={formData.source} onChange={handleChange} name="source" type="text" placeholder="Enter alarm source" required />
                        </Form.Group>
                        <Form.Group controlId="alarmMetric">
                            <Form.Label>Metric:</Form.Label>
                            <Form.Control value={formData.metric} onChange={handleChange} name="metric" type="text" placeholder="Enter alarm metric" required />
                        </Form.Group>
                        <Form.Group controlId="triggerValue">
                            <Form.Label>Trigger Value:</Form.Label>
                            <Form.Control value={formData.triggerValue} onChange={handleChange} name="triggerValue" type="number" placeholder="Enter trigger value" required />
                        </Form.Group>
                        <Form.Check
                            type="switch"
                            required
                            name="paused"
                            id="statusAlarm"
                            label="Active alarm"
                            onChange={handleChange}
                        />
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}