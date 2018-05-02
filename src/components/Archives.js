import React from 'react';
import { Query } from 'react-apollo';
import GET_SUBSCRIPTIONS from '../queries/getSubscriptions';
import ArchivesList from './ArchivesList';
import './Archives.css';

const Archives = props => {
  return (
    <section className="section archives">
      <Query query={GET_SUBSCRIPTIONS} variables={{ user: props.user.id }}>
        {({ loading, error, data: { subscriptions } }) => {
          if (loading) {
            return <div>Chargement...</div>;
          }
          if (error) {
            return <div>Erreur...</div>;
          }

          return (
            <div className="box">
              <h1 className="title is-2">Archives</h1>

              <div className="container">
                {subscriptions.length !== 0 ? (
                  <ul>
                    {subscriptions.map(({ city }) => (
                      <ArchivesList city={city} />
                    ))}
                  </ul>
                ) : (
                  <div className="message is-warning">
                    <div class="message-body">
                      Aucun abonnement. <i class="far fa-frown" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        }}
      </Query>
    </section>
  );
};

export default Archives;
