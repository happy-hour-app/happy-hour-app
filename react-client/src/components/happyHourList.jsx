import React from 'react';
import happyHourEntry from './happyHourEntry.jsx';

const happyHourList = (props) => (
    <div>
        <h4> happyHourList </h4>
        There are {props.items.length} Happy Hours Nearby!
    {props.items.map(item => <happy-hour-entry item={item} />)}
    </div>
)

export default happyHourList;