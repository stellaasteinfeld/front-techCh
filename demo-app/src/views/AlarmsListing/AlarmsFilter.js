import React, {useState, useReducer} from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function AlarmsFilter({refreshAlarmsTable, alarms, setFilteredData}) {
    const [filterField, setFilterField] = useState({});
    const forceUpdate = useReducer(() => ({}))[1];

    function refreshComponent(){
        refreshAlarmsTable();
        setFilteredData(alarms);
        forceUpdate();
    }
    function handleChange(event) {
        let { name, value } = event.target;

        setFilterField(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        if(event.target.value === '') {
            return setFilteredData(alarms);
        }
        const result = alarms.filter((e) => {
            const field = e[filterField.id];
            console.log('stella',filterField);
            if (field === undefined) {
                return false;
            }
            const parsedField = field.toString().toUpperCase();
            const filterValue = event.target.value.toUpperCase();
            return parsedField.indexOf(filterValue) !== -1;
        });
        setFilteredData(result);
        refreshComponent();
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Row className="align-items-center">
                <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                        Name
                    </Form.Label>
                    <Form.Control
                        className="mb-2"
                        id="inlineFormInput"
                        placeholder="Search for name"
                        onChange={handleChange}
                        name="name"
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
                    <Form.Select name="paused" className="me-sm-2" id="inlineFormCustomSelect" onChange={handleChange}>
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
    )
}