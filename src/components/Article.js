import React, { Component } from 'react';

class Article extends Component {
  render() {
    const { article } = this.props;

    if (!article) {
      return <div>Chargement...</div>;
    }

    // TODO : QUARTIER / CATEGORIE

    return (
      <div className="box is-ligth">
        <div className="columns">
          <div className="column is-four-fifths">
            <h4 className="title is-4 ">{article.title}</h4>
          </div>
          <div className="column">
            <p className="subtitle is-7">
              <i class="fas fa-user-circle" /> {article.user.firstname}{' '}
              {article.user.lastname}
            </p>
          </div>
        </div>

        <h6 className="title is-6">{article.subtitle}</h6>
        <p className="content">{article.text}</p>
      </div>
    );
  }
}

export default Article;
