import React, { Component } from 'react';
import { Query } from 'react-apollo';
import ArticleForm from './ArticleForm';
import EventForm from './EventForm';
import NewsletterTitle from './NewsletterTitle';
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
                {newsletter.city.name} <i className="fas fa-chevron-right" />
                <NewsletterTitle newsletter={newsletter} />
              </h1>
              {newsletter.type !== 'ARTICLES' ? null : (
                <ArticleForm newsletter={newsletter} />
              )}
              {newsletter.type !== 'EVENTS' ? null : (
                <EventForm newsletter={newsletter} />
              )}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Newsletter;
