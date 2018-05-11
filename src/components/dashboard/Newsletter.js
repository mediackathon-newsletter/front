import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import NewsletterTitle from './NewsletterTitle';
import NewsletterArticles from './NewsletterArticles';
import NewsletterEvents from './NewsletterEvents';
import GET_NEWSLETTER from '../../queries/getNewsletter';

class Newsletter extends Component {
  render() {
    const { match } = this.props;

    return (
      <Query query={GET_NEWSLETTER} variables={{ id: match.params.id }}>
        {({ loading, error, data: { newsletter } }) => {
          if (loading) {
            return <div />;
          }

          if (error) {
            return <div />;
          }

          return (
            <div>
              <h1 className="title is-4">
                <Link
                  to={`/dashboard/cities/${newsletter.city.id}/newsletters`}
                >
                  {newsletter.city.name}
                </Link>{' '}
                <i className="fas fa-chevron-right" />
                <NewsletterTitle newsletter={newsletter} />
              </h1>
              {newsletter.type !== 'ARTICLES' ? null : (
                <NewsletterArticles newsletter={newsletter} />
              )}
              {newsletter.type !== 'EVENTS' ? null : (
                <NewsletterEvents newsletter={newsletter} />
              )}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Newsletter;
