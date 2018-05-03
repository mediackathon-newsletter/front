import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import CitiesForm from './CitiesForm';
import CREATE_SUBSCRIPTION from '../mutations/createSubscription';
import GET_SUBSCRIPTIONS from '../queries/getSubscriptions';

class SubscriptionForm extends Component {
  handleToggle(e) {
    e.preventDefault();
    this.props.toggle();
  }

  handleCityChange(id) {
    this.setState({ selectedCity: id });
  }

  render() {
    return (
      <Mutation
        mutation={CREATE_SUBSCRIPTION}
        refetchQueries={[{ query: GET_SUBSCRIPTIONS }]}
      >
        {(createSubscription, { loading, error, data }) => {
          return (
            <div className="subscription-form">
              <form
                onSubmit={e => {
                  e.preventDefault();
                  createSubscription({
                    variables: { city: this.state.selectedCity }
                  });
                }}
              >
                <div className="field  has-addons">
                  <div className="control is-expanded">
                    <CitiesForm cityChange={this.handleCityChange.bind(this)} />
                  </div>
                  <div className="control">
                    <button className="button is-primary" type="submit">
                      Ajouter
                    </button>
                  </div>
                </div>
              </form>
            </div>
          );
        }}
      </Mutation>
    );
  }
}

export default SubscriptionForm;
