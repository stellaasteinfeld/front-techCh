import React, {useState} from "react";
import MockBackend from '../../mockdata';
import AddAlarm from "./AddAlarm";
import TableAlarm from "./AlarmsTable";
import AlarmsFilter from "./AlarmsFilter";

import Container from "react-bootstrap/Container";

import './AlarmsListing.scss';

export default function AlarmsListing() {
    const [alarms, setAlarms] = useState(MockBackend.listAlarms);
    const [filteredData, setFilteredData] = useState(alarms);

    function refreshAlarmsTable(){
        setAlarms(MockBackend.listAlarms());
    }

    return (
        <Container className="alarms">
            <h1>Alarms</h1>
            <AlarmsFilter alarms={alarms} refreshAlarmsTable={refreshAlarmsTable} setFilteredData={setFilteredData} />
            <TableAlarm alarms={filteredData} setAlarms={setAlarms} deleteAlarm={MockBackend.removeAlarm} refreshAlarmsTable={refreshAlarmsTable} />
            <AddAlarm createAlarm={MockBackend.addAlarm} refreshAlarmsTable={refreshAlarmsTable} />
        </Container>
    );
}