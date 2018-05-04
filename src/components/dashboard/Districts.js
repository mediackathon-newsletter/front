import React from 'react';
import DistrictItem from './DistrictItem';

const Districts = ({ districts, updateAction, deleteAction }) => {
  return (
    <div>
      {districts.map(district => (
        <DistrictItem
          district={district}
          updateAction={updateAction}
          deleteAction={deleteAction}
        />
      ))}
    </div>
  );
};

export default Districts;
