import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Article from './Article';
import { fetchNewsletter, fetchArticles } from '../helpers/Api';

class Newsletter extends Component {
  state = {};

  componentDidMount() {
    fetchNewsletter(this.props.match.params.id).then(({ data }) =>
      this.setState({ newsletter: data })
    );

    fetchArticles({ id: this.props.match.params.id }).then(({ data }) =>
      this.setState({ articles: data.sort((a, b) => a < b) })
    );
  }

  // TODO : DATE METEO NOM PHOTO FOCUS QUARTIER (ARTICLES) BREVES BIO-JOURNALISTE

  render() {
    const { newsletter, articles } = this.state;

    if (!newsletter || !articles) return <div />;

    return (
      <div>
        <section
          className="section newsletter"
          style={{ 'padding-bottom': '1em' }}
        >
          <div className="box">
            <h1 className="title is-2">
              <Link to="/archives" className="has-text-dark">
                <i class="fas fa-angle-left " />{' '}
              </Link>Newsletter #{moment(newsletter.timestamp).format('W')}/{moment(
                newsletter.timestamp
              ).format('YYYY')}
            </h1>
            <div className="focus">
              <h2 className="title is-3">Le focus</h2>
              {articles.map(a => (a.focus ? <Article article={a} /> : null))}
            </div>
            <div className="others">
              <h2 className="title is-3">Et aussi...</h2>
              {articles.map(a => (a.focus ? null : <Article article={a} />))}
            </div>

            <div className="articles" />
          </div>
        </section>
        <section className="section newsletter-bottom">
          <div className="box ">
            <div className="container">
              <div className="columns">
                <div className="column">
                  <p style={{ 'padding-bottom': '2em' }}>
                    <span className="subtitle is-5">
                      Newsletter proposée par : {'  '}
                    </span>
                    <span className="subtitle is-4">
                      {newsletter.user.firstname} {newsletter.user.lastname}
                    </span>
                  </p>
                  <div className="message is-primary">
                    <h4 className="subtitle is-4">Bio</h4>
                    <p className="element">{newsletter.user.bio}</p>
                  </div>
                </div>
                <div className="column is-2">
                  {newsletter.user.avatar ? (
                    <img src={newsletter.user.avatar} />
                  ) : (
                    <i className="fas fa-user-circle fa-2x" />
                  )}
                </div>
                <div className="column is-2">
                  {newsletter.user.facebook ? (
                    <p>
                      <i class="fab fa-facebook " /> {newsletter.user.facebook}
                    </p>
                  ) : null}
                  {newsletter.user.twitter ? (
                    <p>
                      <i class="fab fa-twitter" /> {newsletter.user.twitter}
                    </p>
                  ) : null}
                  {newsletter.user.linkedin ? (
                    <p>
                      <i class="fab fa-linkedin" /> {newsletter.user.linkedin}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Newsletter;
