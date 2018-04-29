import React, { Component } from 'react';
import SubscriptionForm from './SubscriptionForm';
import { getUser } from '../helpers/Auth';
import { fetchSubscriptions, deleteSubscription } from '../helpers/Api';

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
      this.setState({
        subscriptions: data.sort((a, b) => a.city.name > b.city.name)
      })
    );
  }

  cancelSubscription(subscription) {
    const currentUser = getUser();
    console.log(subscription, currentUser);
    deleteSubscription(subscription.id, currentUser.id).then(() =>
      this.refresh()
    );
  }

  renderSubscription(subscription) {
    return (
      <div key={subscription.id} className="box">
        <div className="media">
          <div className="media-content">
            <p className="subtitle is-4">{subscription.city.name}</p>
          </div>
          <div classname="media-right">
            <button
              className="button is-white"
              onClick={() => this.cancelSubscription(subscription)}
            >
              <span className="icon is-medium">
                <i className="fas fa-trash-alt fa-2x" />
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  renderSubscriptions(subscriptions) {
    const { profile } = this.state;

    if (!subscriptions) {
      return <div>Chargement...</div>;
    }

    return (
      <div className="subscriptions">
        {subscriptions.map(subscription =>
          this.renderSubscription(subscription)
        )}
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
          {subscriptions.length !== 0 ? (
            this.renderSubscriptions(subscriptions)
          ) : (
            <div className="message is-warning">
              <div class="message-body">
                Aucun abonnement. <i class="far fa-frown" />
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default Subscriptions;
