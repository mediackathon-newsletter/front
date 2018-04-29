import React, { Component } from 'react';
import SubscriptionForm from './SubscriptionForm';
import { getUser } from '../helpers/Auth';
import { fetchSubscriptions } from '../helpers/Api';

import './Subscription.css';

class Subscriptions extends Component {
  state = {
    form: false
  };

  componentDidMount() {
    this.refresh();
  }

  toggleSubscriptionForm() {
    this.setState({ form: !this.state.form });
    this.refresh();
  }

  refresh() {
    const currentUser = getUser();

    fetchSubscriptions(currentUser).then(({ data }) =>
      this.setState({ subscriptions: data })
    );
  }

  renderSubscription(subscription) {
    return (
      <tr key={subscription.id}>
        <td>{subscription.city.name}</td>
        <td>
          <button className="button is-small is-rounded">
            <i className="fas fa-ban" />Desinscription
          </button>
        </td>
      </tr>
    );
  }

  renderSubscriptions() {
    const { subscriptions } = this.state;

    const { profile } = this.state;

    if (!subscriptions) {
      return <div>Chargement...</div>;
    }

    return (
      <div className="subscriptions">
        <table className="table is-fullwidth">
          <thead>
            <th>Ville</th>
            <th />
          </thead>
          <tbody>
            {subscriptions.map(subscription =>
              this.renderSubscription(subscription)
            )}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    const { subscriptions } = this.state;

    if (!subscriptions) {
      return <div>Chargement...</div>;
    }

    return (
      <section className="section subscriptions">
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
            className={this.state.form ? 'message' : 'is-invisible is-overlay'}
          >
            <div className="message-header">
              <p>Ajouter un abonnement</p>
              <button
                class="delete"
                aria-label="delete"
                onClick={this.toggleSubscriptionForm.bind(this)}
              />
            </div>
            <div class="message-body">
              <SubscriptionForm
                toggle={this.toggleSubscriptionForm.bind(this)}
              />
            </div>
          </div>

          {this.renderSubscriptions()}
        </div>
      </section>
    );
  }
}

export default Subscriptions;
