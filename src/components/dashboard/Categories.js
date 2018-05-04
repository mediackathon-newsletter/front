import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import GET_CATEGORIES from '../../queries/getCategories';
import CREATE_CATEGORY from '../../mutations/createCategory';
import UPDATE_CATEGORY from '../../mutations/updateCategory';
import DELETE_CATEGORY from '../../mutations/deleteCategory';

class Categories extends Component {
  render() {
    const { data: { loading, error, categories } } = this.props;

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

    return <div>{categories.map(category => <div>{category.name}</div>)}</div>;
  }
}

export default compose(
  graphql(GET_CATEGORIES),
  graphql(CREATE_CATEGORY, {
    name: 'createCategory',
    options: { refetchQueries: [{ query: GET_CATEGORIES }] }
  }),
  graphql(UPDATE_CATEGORY, {
    name: 'updateCategory',
    options: { refetchQueries: [{ query: GET_CATEGORIES }] }
  }),
  graphql(DELETE_CATEGORY, {
    name: 'deleteCategory',
    options: { refetchQueries: [{ query: GET_CATEGORIES }] }
  })
)(Categories);
