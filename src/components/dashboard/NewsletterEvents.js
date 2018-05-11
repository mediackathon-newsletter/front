import React, { Component } from 'react';
import { Query, graphql, compose } from 'react-apollo';
import EventsList from './EventsList';
import EventForm from './EventForm';

import GET_EVENTS from '../../queries/getEvents';
import TOGGLE_EDITING_EVENT from '../../mutations/toggleEditingEvent';
import DELETE_EVENT from '../../mutations/deleteEvent';

class NewsletterEvents extends Component {
  constructor(props) {
    super(props);
  }

  editAction(id) {
    this.props.toggleEditing({ variables: { id } });
  }

  deleteAction(id) {
    this.props.deleteEvent({ variables: { id } });
  }

  render() {
    const { newsletter } = this.props;

    return (
      <Query query={GET_EVENTS} variables={{ newsletter: newsletter.id }}>
        {({ loading, error, data: { events } }) => {
          if (loading) return <div />;
          if (error) return <div />;

          return (
            <div>
              <EventsList
                events={events}
                editAction={this.editAction.bind(this)}
                deleteAction={this.deleteAction.bind(this)}
              />
              <EventForm newsletter={newsletter} events={events} />
            </div>
          );
        }}
      </Query>
    );
  }
}

export default compose(
  graphql(TOGGLE_EDITING_EVENT, { name: 'toggleEditing' }),
  graphql(DELETE_EVENT, {
    name: 'deleteEvent',
    options: ({ newsletter }) => ({
      refetchQueries: [
        { query: GET_EVENTS, variables: { newsletter: newsletter.id } }
      ]
    })
  })
)(NewsletterEvents);
