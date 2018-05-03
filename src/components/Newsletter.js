import React, { Component } from 'react';
import moment from 'moment';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import Article from './Article';
import GET_NEWSLETTER from '../queries/getNewsletter';
// TODO : DATE METEO NOM PHOTO FOCUS QUARTIER (ARTICLES) BREVES BIO-JOURNALISTE

const Newsletter = ({ data: { loading, error, newsletter } }) => {
  if (loading) {
    return <div>Chargement..</div>;
  }
  if (error) {
    return <div>Erreur...</div>;
  }

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
            {newsletter.articles.map(
              a => (a.focus ? <Article article={a} /> : null)
            )}
          </div>
          <div className="others">
            <h2 className="title is-3">Et aussi...</h2>
            {newsletter.articles.map(
              a => (a.focus ? null : <Article article={a} />)
            )}
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
                    {newsletter.journalist.firstname}{' '}
                    {newsletter.journalist.lastname}
                  </span>
                </p>
                <div className="message is-primary">
                  <h4 className="subtitle is-4">Bio</h4>
                  <p className="element">{newsletter.journalist.bio}</p>
                </div>
              </div>
              <div className="column is-2">
                {newsletter.journalist.avatar ? (
                  <img src={newsletter.journalist.avatar} />
                ) : (
                  <i className="fas fa-user-circle fa-2x" />
                )}
              </div>
              <div className="column is-2">
                {newsletter.journalist.facebook ? (
                  <p>
                    <i class="fab fa-facebook " />{' '}
                    {newsletter.journalist.facebook}
                  </p>
                ) : null}
                {newsletter.journalist.twitter ? (
                  <p>
                    <i class="fab fa-twitter" /> {newsletter.journalist.twitter}
                  </p>
                ) : null}
                {newsletter.journalist.linkedin ? (
                  <p>
                    <i class="fab fa-linkedin" />{' '}
                    {newsletter.journalist.linkedin}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default graphql(GET_NEWSLETTER, {
  options: ownProps => ({ variables: { id: ownProps.match.params.id } })
})(Newsletter);
