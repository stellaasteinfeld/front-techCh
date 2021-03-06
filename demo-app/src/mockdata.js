import _ from 'lodash';

let Alarms = [
    {id: 1, name: 'slack', source: 'server 1', metric: 'CPU usg', triggerValue: 80, paused: 1},
    {id: 2, name: 'myAlarm', source: 'server 8080', metric: 'CPU usg', triggerValue: 90, paused: 1},
    {id: 3, name: 'github', source: 'server 1', metric: 'CPU usg', triggerValue: 70, paused: 0},
];


const MockBackend = {
    listAlarms: () => Alarms,
    addAlarm: (alarm) => {
        if (typeof alarm.name != "string" || alarm.name === '') {
            throw new Error('Alarm name is missing');
        }
        if (typeof alarm.triggerValue != "number" || alarm.triggerValue < 0) {
            throw new Error('Alarm trigger value need to be a positive number');
        }
        alarm.id = _.max(Alarms.map(a => a.id)) + 1;
        Alarms.push(alarm);
        return alarm;
    },
    editAlarm: (alarm_id, newData) => {
        if (typeof newData.name != "string" || newData.name === '') {
            throw new Error('Alarm name is missing');
        }
        if (typeof newData.triggerValue != "number" || newData.triggerValue < 0) {
            throw new Error('Alarm trigger value need to be a positive number');
        }

        const oldAlarm = _.find(Alarms, ['id', alarm_id]);
        oldAlarm.replace(newData);
    },
    removeAlarm: (alarm_id) => {Alarms = Alarms.filter(c => c.id !== alarm_id)},

};

export default MockBackend;