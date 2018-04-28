import React from 'react';

import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Votre actualité hebdomadaire</h1>
            <h2 className="subtitle">
              Curabitur vel ultrices magna. Donec eu consequat dui, ac ornare.
            </h2>
          </div>
        </div>
      </section>
      <section className="hero is-info">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Nos formules</h1>
            <h2 className="subtitle">
              In sagittis mi quis dui mollis, et fermentum mauris venenatis.
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
