import React from 'react';
import { graphql, compose } from 'react-apollo';

import TOGGLE_EDITING_EVENT from '../../mutations/toggleEditingEvent';

const EventItem = ({ event: { id, title }, editAction, deleteAction }) => {
  return (
    <div>
      {title}
      <button onClick={() => editAction(id)}>Modifier</button>
      <button onClick={() => deleteAction(id)}>Supprimer</button>
    </div>
  );
};

export default EventItem;
