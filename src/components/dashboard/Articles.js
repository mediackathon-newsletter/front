import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import GET_ARTICLES from '../../queries/getArticles';
import GET_CITIES from '../../queries/getCities';
import CREATE_ARTICLE from '../../mutations/createArticle';
import UPDATE_ARTICLE from '../../mutations/updateArticle';
import DELETE_ARTICLE from '../../mutations/deleteArticle';

class Articles extends Component {
  render() {
    console.log(this.props);

    const { data: { loading, error, articles } } = this.props.getCities;

    if (loading) {
      return (
        <article className="message">
          <div className="message-body">
            <p>Chargement...</p>
          </div>
        </article>
      );
    }

    if (error) {
      return (
        <div className="message is-warning">
          <div className="message-body">
            <p>Erreur</p>
          </div>
        </div>
      );
    }

    return <div>{articles.map(article => <div>{article.name}</div>)}</div>;
  }
}

export default compose(
  graphql(GET_CITIES, {
    name: 'getCities'
  }),
  graphql(CREATE_ARTICLE, {
    name: 'createArticle',
    options: { refetchQueries: [{ query: GET_ARTICLES }] }
  }),
  graphql(UPDATE_ARTICLE, {
    name: 'updateArticle',
    options: { refetchQueries: [{ query: GET_ARTICLES }] }
  }),
  graphql(DELETE_ARTICLE, {
    name: 'deleteArticle',
    options: { refetchQueries: [{ query: GET_ARTICLES }] }
  })
)(Articles);
