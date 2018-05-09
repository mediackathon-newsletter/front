import React from 'react';

import { Query } from 'react-apollo';
import NewsletterItem from './NewsletterItem';
import GET_NEWSLETTERS from '../../queries/getNewsletters';

const NewslettersList = ({ city }) => (
  <Query query={GET_NEWSLETTERS} variables={{ city: city.id }}>
    {({ loading, error, data: { newsletters } }) => {
      if (loading || error) {
        return <div />;
      }

      if (newsletters.length === 0) {
        return <div>Aucune newsletter</div>;
      }

      return (
        <div>
          <ul>
            {newsletters.map(n => (
              <NewsletterItem newsletter={n} key={n.id} city={city} />
            ))}
          </ul>
        </div>
      );
    }}
  </Query>
);

export default NewslettersList;
