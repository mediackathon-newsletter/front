import React from 'react';

import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero is-white has-background-light">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Votre actualité hebdomadaire</h1>
            <h2 className="subtitle">
              Tous les mercredis pour le gouter votre information de la semaine,
              et tous les vendredis pour l'apéro les activités de votre Week-End
            </h2>
          </div>
        </div>
      </section>
      <section className="hero is-white has-background-light">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Notre philosophie</h1>
            <h2 className="subtitle">Donnez donnez donnez vos dons.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              rhoncus ut felis ut vulputate. Duis sodales dignissim libero, a
              posuere nulla tristique sit amet. Sed aliquet finibus felis id
              cursus. Cras aliquam mi et libero feugiat sagittis. Vestibulum
              venenatis ante et magna bibendum aliquet. Phasellus posuere dolor
              eget viverra feugiat. Nam ligula ex, posuere a leo lobortis,
              volutpat vulputate felis. Praesent venenatis tortor eget quam
              vestibulum, eu varius diam euismod. Quisque facilisis, urna ac
              venenatis elementum, augue lorem interdum ex, pulvinar
              sollicitudin ipsum enim eget sem. Pellentesque accumsan luctus
              gravida. Duis ut dolor magna. Pellentesque varius orci a nibh
              commodo tempor. Nunc eu finibus erat. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </p>
          </div>
        </div>
      </section>
      <section className="hero is-white has-background-light">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">La rédaction</h1>
            <h2 className="subtitle">Une équipe de grands malades.</h2>
            <p>
              <img src="team.jpg" className="picture is-centered" />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
