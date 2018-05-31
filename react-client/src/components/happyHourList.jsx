import React from 'react';
<<<<<<< HEAD
import HappyHourEntry from './happyHourEntry.jsx';
=======
import happyHourEntry from './happyHourEntry.jsx';
>>>>>>> 0380cdbeab8599f588d99e0b14ccc610be543579

const happyHourList = (props) => (
    <div>
        <h4> happy Hour List </h4>
        There are {props.items.length} Happy Hours Nearby!
<<<<<<< HEAD
    {props.items.map(item => <HappyHourEntry item={item} />)}
=======
    {props.items.map(item => <happy-hour-entry item={item} />)}
>>>>>>> 0380cdbeab8599f588d99e0b14ccc610be543579
    </div>
)

export default happyHourList;