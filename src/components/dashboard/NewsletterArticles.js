import React, { Component } from 'react';
import { Query, graphql, compose } from 'react-apollo';
import ArticlesList from './ArticlesList';
import ArticleForm from './ArticleForm';

import GET_ARTICLES from '../../queries/getArticles';
import TOGGLE_EDITING_ARTICLE from '../../mutations/toggleEditingArticle';
import DELETE_ARTICLE from '../../mutations/deleteArticle';

class NewsletterArticles extends Component {
  constructor(props) {
    super(props);
  }

  editAction(id) {
    this.props.toggleEditing({ variables: { id } });
  }

  deleteAction(id) {
    this.props.deleteArticle({ variables: { id } });
  }

  render() {
    const { newsletter } = this.props;

    return (
      <Query query={GET_ARTICLES} variables={{ newsletter: newsletter.id }}>
        {({ loading, error, data: { articles } }) => {
          if (loading) return <div />;
          if (error) return <div />;

          return (
            <div>
              <ArticlesList
                articles={articles}
                editAction={this.editAction.bind(this)}
                deleteAction={this.deleteAction.bind(this)}
              />
              <ArticleForm newsletter={newsletter} articles={articles} />
            </div>
          );
        }}
      </Query>
    );
  }
}

export default compose(
  graphql(TOGGLE_EDITING_ARTICLE, { name: 'toggleEditing' }),
  graphql(DELETE_ARTICLE, {
    name: 'deleteArticle',
    options: ({ newsletter }) => ({
      refetchQueries: [
        { query: GET_ARTICLES, variables: { newsletter: newsletter.id } }
      ]
    })
  })
)(NewsletterArticles);
