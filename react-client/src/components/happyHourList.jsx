import React from 'react';
import happyHourEntry from './happyHourEntry';

const happyHourList = (props) => (
    <div>
        <h4> happyHourList </h4>
        There are {props.items.length} Happy Hours Nearby!
    {props.items.map(item => <happyHourEntry item={item} />)}
    </div>
)

export default happyHourList;