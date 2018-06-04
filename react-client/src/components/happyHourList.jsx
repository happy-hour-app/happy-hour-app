import React from 'react';
import HappyHourEntry from './happyHourEntry.jsx';

const HappyHourList = props => (
  <div>
    <h4> happy Hour List </h4>
      There are {props.items.length} Happy Hours Nearby!
    {props.items.map(item => <HappyHourEntry item={item} />)}
  </div>
);

export default HappyHourList;
