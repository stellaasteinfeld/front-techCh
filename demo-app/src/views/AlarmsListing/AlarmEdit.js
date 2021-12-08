import React, {useReducer, useState} from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export default function AlarmEdit({refreshAlarmsTable, setShowModal, showModal, editAlarm, alarmToEdit}) {

    const [formData, setFormData] = useState({
        id: null,
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
    const handleClose = () => {
        setShowModal(false)
        setFormData({
            name: '',
            source: '',
            metric: '',
            triggerValue: 0,
            paused: 0
        });
    };

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
            editAlarm(alarmToEdit.id, ...[formData]);
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
        setShowModal(false);
    }

    return(
        <>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Alarm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group controlId="alarmName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control value={formData.name || alarmToEdit.name} onChange={handleChange} name="name" type="text" placeholder="Enter alarm name" />
                        </Form.Group>
                        <Form.Group controlId="alarmSource">
                            <Form.Label>Source:</Form.Label>
                            <Form.Control value={formData.source || alarmToEdit.source} onChange={handleChange} name="source" type="text" placeholder="Enter alarm source" />
                        </Form.Group>
                        <Form.Group controlId="alarmMetric">
                            <Form.Label>Metric:</Form.Label>
                            <Form.Control value={formData.metric || alarmToEdit.metric} onChange={handleChange} name="metric" type="text" placeholder="Enter alarm metric" />
                        </Form.Group>
                        <Form.Group controlId="triggerValue">
                            <Form.Label>Trigger Value:</Form.Label>
                            <Form.Control value={formData.triggerValue || alarmToEdit.triggerValue} onChange={handleChange} name="triggerValue" type="number" placeholder="Enter trigger value" />
                        </Form.Group>
                        <Form.Check
                            type="switch"
                            required
                            name="paused"
                            id="statusAlarm"
                            label="Active alarm"
                            value={formData.paused === 1 ||alarmToEdit.paused === 1}
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