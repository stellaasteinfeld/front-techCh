import React, {useState} from "react";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import AlarmEdit from "./AlarmEdit";
import MockBackend from "../../mockdata";

export default function AlarmsTable({alarms, setAlarms, refreshAlarmsTable, deleteAlarm}) {
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [alarmToEdit, setAlarmToEdit] = useState({});

    function handleDeleteAlarm(alarm) {
        deleteAlarm(alarm);
        refreshAlarmsTable();
    }

    return (
        <>
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
                { alarms.map(alarm =>
                    <>
                        <tr>
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
                                        <Dropdown.Item onClick={() => {
                                            setShowModalEdit(true)
                                            setAlarmToEdit(alarm)
                                        }}>Edit</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleDeleteAlarm(alarm.id)}>Delete</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setAlarms({paused: 1 - alarm.paused})}>{alarm.paused === 0 ? 'Resume' : 'Pause'}</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                            <AlarmEdit editAlarm={MockBackend.editAlarm} refreshAlarmsTable={refreshAlarmsTable} showModal={showModalEdit} setShowModal={setShowModalEdit} alarmToEdit={alarmToEdit} />

                        </>
                )}
                </tbody>
            </Table>
        </>
    );
}