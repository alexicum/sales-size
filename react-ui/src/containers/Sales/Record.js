import React from 'react';

const Record = ({ _id, dateTime, rate, value, delta }) => {
  return (
    <li>
      <span>Id:</span> {_id}
      <span>DateTime:</span> {dateTime}
      <span>Rate:</span> {rate}
      <span>Value:</span> {value}
      <span>Delta:</span> {delta}
    </li>
  );
};

export default Record;
