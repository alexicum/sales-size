import React from 'react';
import Record from './Record';

const RecordsList = ({ records }) => (
  <ul>
    { records.map(r => <Record key={r.id} {...r}/>) }
  </ul>
);

export default RecordsList;
