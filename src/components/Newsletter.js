import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Article from './Article';
import { fetchNewsletter, fetchArticles } from '../helpers/Api';

class Newsletter extends Component {
  state = {};

  componentDidMount() {
    fetchNewsletter(this.props.match.params.id).then(({ data }) =>
      this.setState({ newsletter: data })
    );

    fetchArticles(this.props.match.params.id).then(({ data }) =>
      this.setState({ articles: data })
    );
  }

  // DATE METEO NOM PHOTO FOCUS QUARTIER (ARTICLES) BREVES BIO-JOURNALISTE

  render() {
    const { newsletter, articles } = this.state;

    if (!newsletter || !articles) return <div />;

    return (
      <section className="section newsletter">
        <div className="box">
          <span>
            <Link to="/archives">
              <i class="fas fa-angle-left fa-4x" />
            </Link>
          </span>
          <h1 className="title is-2">Newsletter {newsletter.timestamp}</h1>
          <div className="articles">
            {articles.map(article => <Article article={article} />)}
          </div>
        </div>
      </section>
    );
  }
}

export default Newsletter;
