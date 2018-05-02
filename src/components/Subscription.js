import React from 'react';
import { Mutation } from 'react-apollo';
import DEL_SUBSCRIPTION from '../mutations/deleteSubscription';
import GET_SUBSCRIPTIONS from '../queries/getSubscriptions';

const Subscription = ({ subscription }) => {
  return (
    <Mutation
      mutation={DEL_SUBSCRIPTION}
      refetchQueries={[{ query: GET_SUBSCRIPTIONS }]}
    >
      {(deleteSubscription, { loading, error, data }) => {
        return (
          <div key={subscription.id} className="box">
            <div className="media">
              <div className="media-content">
                <p className="subtitle is-4">{subscription.city.name}</p>
              </div>
              <div classname="media-right">
                <button
                  className="button is-white"
                  onClick={() => {
                    deleteSubscription({ variables: { id: subscription.id } });
                  }}
                >
                  <span className="icon is-medium">
                    <i className="fas fa-trash-alt fa-2x" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        );
      }}
    </Mutation>
  );
};

export default Subscription;
