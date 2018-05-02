import React, { Component } from 'react';
import { Query } from 'react-apollo';
import GET_SUBSCRIPTIONS from '../queries/getSubscriptions';
import Subscription from './Subscription';
import SubscriptionForm from './SubscriptionForm';

import './Subscription.css';

class Subscriptions extends Component {
  state = {
    form: false
  };

  toggleSubscriptionForm() {
    this.setState({ form: !this.state.form });
  }

  renderSubscriptions(subscriptions) {
    return subscriptions.map(subscription => (
      <Subscription subscription={subscription} />
    ));
  }

  render() {
    return (
      <section className="section subscriptions">
        <Query
          query={GET_SUBSCRIPTIONS}
          variables={{ user: this.props.user.id }}
        >
          {({ loading, error, data: { subscriptions } }) => {
            if (loading) {
              return <div className="loading">Chargement...</div>;
            }
            if (error) {
              return <div className="error">Erreur...</div>;
            }

            return (
              <div className="box">
                <div className="columns">
                  <div className="column is-11">
                    <h1 className="title is-2">Mes abonnements</h1>
                  </div>
                  <div className="column">
                    <div className={!this.state.form ? '' : 'is-invisible'}>
                      <button
                        className="button  is-large"
                        onClick={this.toggleSubscriptionForm.bind(this)}
                      >
                        <span className="icon is-medium">
                          <i className="fas fa-plus fa-1x" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    this.state.form ? 'message' : 'is-invisible is-overlay'
                  }
                >
                  <div className="message-header">
                    <p>Ajouter un abonnement</p>
                    <button
                      className="delete"
                      aria-label="delete"
                      onClick={this.toggleSubscriptionForm.bind(this)}
                    />
                  </div>
                  <div className="message-body">
                    <SubscriptionForm
                      user={this.props.user}
                      toggle={this.toggleSubscriptionForm.bind(this)}
                    />
                  </div>
                </div>
                {subscriptions.length !== 0 ? (
                  this.renderSubscriptions(subscriptions)
                ) : (
                  <div className="message is-warning">
                    <div className="message-body">
                      Aucun abonnement. <i className="far fa-frown" />
                    </div>
                  </div>
                )}
              </div>
            );
          }}
        </Query>
      </section>
    );
  }
}

export default Subscriptions;
