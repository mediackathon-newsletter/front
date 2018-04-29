import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../helpers/Auth';

import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero is-white has-background-light">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">CLF, c’est l’info qu’il me faut</h1>
            <h2 className="subtitle">
              Clermont-Ferrand ce sont des quartiers vivants, animés par des
              habitants enthousiasmants. CLF les met en lumière chaque semaine.
              Les mercredis et vendredis vous recevrez directement dans votre
              boite mail de l’info ultra locale. CLF c’est aussi de l’info
              pratique sur ce qu’il se passe à côté de chez vous.
            </h2>
          </div>
        </div>
      </section>
      {!getUser() ? (
        <section className="hero is-white has-background-light">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Essai gratuit</h1>
              <h2 className="subtitle">
                Testez notre newsletter avec votre premier mois d'abonnement
                gratuit
              </h2>
              <p className="has-text-centered">
                <Link
                  to="/signup"
                  className="button is-primary is-large has-background-danger"
                >
                  Inscription
                </Link>
              </p>
            </div>
          </div>
        </section>
      ) : null}

      <section className="hero is-white has-background-light">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">L'équipe</h1>
            <h2 className="subtitle">
              Une équipe de journaliste dans le cloud.
            </h2>
            <p className="has-text-centered">
              <img src="team.jpg" className="picture i" />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
