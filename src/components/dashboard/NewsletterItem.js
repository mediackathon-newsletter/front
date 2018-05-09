import React from 'react';
import { Mutation } from 'react-apollo';
import { Link, withRouter } from 'react-router-dom';
import NewsletterTitle from './NewsletterTitle';
import GET_NEWSLETTERS from '../../queries/getNewsletters';
import DELETE_NEWSLETTER from '../../mutations/deleteNewsletter';

const NewsletterItem = ({ city, newsletter, match }) => {
  return (
    <li>
      <div className="columns">
        <div className="column">
          <Link to={`/dashboard/newsletters/${newsletter.id}`}>
            <NewsletterTitle newsletter={newsletter} />
          </Link>
        </div>
        <div className="column">
          <Mutation
            mutation={DELETE_NEWSLETTER}
            variables={{ id: newsletter.id }}
            refetchQueries={[
              { query: GET_NEWSLETTERS, variables: { city: city.id } }
            ]}
          >
            {(deleteNewsletter, { loading, error }) => {
              return <button onClick={deleteNewsletter}>Supprimer</button>;
            }}
          </Mutation>
        </div>
      </div>
    </li>
  );
};

export default withRouter(NewsletterItem);
