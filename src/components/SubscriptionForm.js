import React, { Component } from 'react';
import CitiesForm from './CitiesForm';
import { getUser } from '../helpers/Auth';
import { createSubscription } from '../helpers/Api';

class SubscriptionForm extends Component {
  handleToggle(e) {
    e.preventDefault();
    this.props.toggle();
  }

  handleCityChange(id) {
    this.setState({ selectedCity: id });
  }

  handleSubmit() {
    const currentUser = getUser();
    createSubscription(currentUser, {
      id: parseInt(this.state.selectedCity)
    }).then(() => this.props.toggle());
  }

  render() {
    return (
      <div className="subscription-form">
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <div className="field  has-addons">
            <div className="control is-expanded">
              <CitiesForm cityChange={this.handleCityChange.bind(this)} />
            </div>
            <div className="control">
              <button
                className="button is-primary"
                onClick={this.handleSubmit.bind(this)}
              >
                Ajouter
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SubscriptionForm;
