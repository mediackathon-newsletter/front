import React from 'react';
import EventItem from './EventItem';

const EventsList = ({ events, editAction, deleteAction }) => {
  return (
    <div>
      {events.map(event => (
        <EventItem
          key={event.id}
          event={event}
          editAction={editAction}
          deleteAction={deleteAction}
        />
      ))}
    </div>
  );
};

export default EventsList;
