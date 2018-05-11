import React, { Component } from 'react';
import { Mutation, graphql, compose } from 'react-apollo';

import CategorySelect from './CategorySelect';
import DistrictSelect from './DistrictSelect';

import CREATE_ARTICLE from '../../mutations/createArticle';
import GET_ARTICLES from '../../queries/getArticles';
import UPDATE_ARTICLE from '../../mutations/updateArticle';
import TOGGLE_EDITING_ARTICLE from '../../mutations/toggleEditingArticle';

class ArticleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
  }

  static getDerivedStateFromProps({ newsletter, articles }, prevState) {
    if (articles) {
      const article = articles.find(a => a.editing === true);
      if (article) {
        return {
          id: article.id,
          title: article.title,
          subtitle: article.subtitle,
          text: article.text,
          category: article.category.id,
          district: article.district.id,
          newsletter: newsletter.id,
          city: newsletter.city,
          editing: true
        };
      }
    }

    return {
      newsletter: newsletter.id,
      city: newsletter.city,
      id: '',
      title: '',
      subtitle: '',
      text: '',
      category: '',
      district: '',
      editing: false
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.editing) {
      this.createArticle();
    } else {
      this.updateArticle();
    }
  }

  createArticle() {
    const {
      newsletter,
      title,
      subtitle,
      text,
      category,
      district
    } = this.state;
    this.props.createArticle({
      variables: {
        article: {
          newsletter,
          category,
          district,
          title,
          subtitle,
          text
        }
      }
    });
  }

  updateArticle() {
    const {
      id,
      newsletter,
      title,
      subtitle,
      text,
      category,
      district
    } = this.state;
    this.props.updateArticle({
      variables: {
        article: {
          id,
          newsletter,
          category,
          district,
          title,
          subtitle,
          text
        }
      }
    });
  }

  render() {
    return (
      <div>
        <h2 className="title is-5">
          {this.state.editing ? `Modifier l'article` : `Nouvel Article`}
        </h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="field">
            <label className="label">Titre</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={this.state.title}
                onChange={e => {
                  this.setState({ title: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Sous-titre</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={this.state.subtitle}
                onChange={e => {
                  this.setState({ subtitle: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Corps</label>
            <div className="control">
              <textarea
                value={this.state.text}
                className="textarea"
                onChange={e => {
                  this.setState({ text: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Quartier</label>
            <div className="control">
              <DistrictSelect
                city={this.state.city}
                district={this.state.district}
                onSelect={district => this.setState({ district })}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Categorie</label>
            <div className="control">
              <CategorySelect
                category={this.state.category}
                onSelect={category => {
                  this.setState({ category });
                }}
              />
            </div>
          </div>

          <button type="submit" className="button is-primary">
            {this.state.editing ? `Modifier` : 'Créer'}
          </button>
          {this.state.editing ? (
            <Mutation
              mutation={TOGGLE_EDITING_ARTICLE}
              variables={{ id: this.state.articleId }}
            >
              {(toggleEditingArticle, { loading, error }) => (
                <button
                  type="button"
                  className="button is-primary"
                  onClick={() => {
                    toggleEditingArticle({
                      variables: { id: this.state.id }
                    });
                  }}
                >
                  Annuler
                </button>
              )}
            </Mutation>
          ) : null}
        </form>
      </div>
    );
  }
}

export default compose(
  graphql(CREATE_ARTICLE, {
    name: 'createArticle',
    options: ({ newsletter: { id } }) => ({
      refetchQueries: [{ query: GET_ARTICLES, variables: { newsletter: id } }]
    })
  }),
  graphql(UPDATE_ARTICLE, {
    name: 'updateArticle',
    options: ({ newsletter: { id } }) => ({
      refetchQueries: [{ query: GET_ARTICLES, variables: { newsletter: id } }]
    })
  })
)(ArticleForm);
