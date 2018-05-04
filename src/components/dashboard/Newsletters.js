import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import GET_NEWSLETTERS from '../../queries/getNewsletters';
import CREATE_NEWSLETTER from '../../mutations/createNewsletter';
import UPDATE_NEWSLETTER from '../../mutations/updateNewsletter';
import DELETE_NEWSLETTER from '../../mutations/deleteNewsletter';

class Newsletters extends Component {
  render() {
    const { data: { loading, error, newsletters } } = this.props;

    if (loading) {
      return (
        <newsletter className="message">
          <div className="message-body">
            <p>Chargement...</p>
          </div>
        </newsletter>
      );
    }

    if (error) {
      return (
        <div className="message is-warning">
          <div className="message-body">
            <p>Erreur</p>
          </div>
        </div>
      );
    }

    return (
      <div>{newsletters.map(newsletter => <div>{newsletter.name}</div>)}</div>
    );
  }
}

export default compose(
  graphql(GET_NEWSLETTERS),
  graphql(CREATE_NEWSLETTER, {
    name: 'createNewsletter',
    options: { refetchQueries: [{ query: GET_NEWSLETTERS }] }
  }),
  graphql(UPDATE_NEWSLETTER, {
    name: 'updateNewsletter',
    options: { refetchQueries: [{ query: GET_NEWSLETTERS }] }
  }),
  graphql(DELETE_NEWSLETTER, {
    name: 'deleteNewsletter',
    options: { refetchQueries: [{ query: GET_NEWSLETTERS }] }
  })
)(Newsletters);
