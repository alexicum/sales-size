import React from 'react';

const Record = ({ id, dateTime, rate, value, delta }) => {
  return (
    <li>
      <span>Id:</span> {id}
      <span>DateTime:</span> {dateTime}
      <span>Rate:</span> {rate}
      <span>Value:</span> {value}
      <span>Delta:</span> {delta}
    </li>
  );
};

export default Record;
