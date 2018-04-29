import React, { Component } from 'react';
import './Article.css';
class Article extends Component {
  render() {
    const { article } = this.props;

    if (!article) {
      return <div>Chargement...</div>;
    }

    // TODO : QUARTIER / CATEGORIE

    return (
      <div className="article is-rounded">
        <div className="columns">
          <div className="column is-four-fifths">
            <h4 className="subtitle is-4 ">
              {article.title}{' '}
              <span class="tag is-rounded is-success">
                {article.category.name}
              </span>{' '}
              <span class="tag is-rounded is-info">
                {article.district.name}
              </span>
            </h4>
          </div>
          <div className="column" />
        </div>

        <h6 className="title is-5">{article.subtitle}</h6>

        <div className="columns">
          {article.img ? (
            <div className="column is-3">
              <img src={article.img} width="400" />
            </div>
          ) : null}

          <div className="column">
            <p>{article.content}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
