import React from 'react';


const HappyHourHeader = props => (
  <div>
    <h2>Happy Hour App</h2>
    <h4>Location</h4>
    <span>{ props.location }</span>
    <h4>Date</h4>
    <span>{ props.date }</span>
  </div>
);

export default HappyHourHeader;
