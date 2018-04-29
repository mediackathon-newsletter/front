import React, { Component } from 'react';
import { fetchSubscriptions } from '../helpers/Api';
import { getUser } from '../helpers/Auth';

import ArchivesSubscriptionItem from './ArchivesSubscriptionItem';
import './Archives.css';

class Archives extends Component {
  constructor(props) {
    super(props);
  }

  state = {};

  componentDidMount() {
    this.fetchSubscriptions();
  }

  fetchSubscriptions() {
    const user = getUser();
    fetchSubscriptions(user).then(({ data }) => {
      this.setState({
        subscriptions: data.sort((a, b) => a.city.name > b.city.name)
      });
    });
  }

  render() {
    const { subscriptions } = this.state;

    if (!subscriptions) {
      return <div>Chargement...</div>;
    }

    return (
      <section className="section archives">
        <div className="box">
          <h1 className="title is-2">Archives</h1>

          <div className="container">
            {subscriptions.length != 0 ? (
              <ul>
                {subscriptions.map(subscription => (
                  <ArchivesSubscriptionItem subscription={subscription} />
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
      </section>
    );
  }
}

export default Archives;
