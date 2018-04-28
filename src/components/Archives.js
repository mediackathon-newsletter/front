import React from 'react';

const Archives = () => {
  return (
    <section className="section archives">
      <div className="box">
        <h1 className="title is-2">Archives</h1>

        <div className="container">
          <ul>
            <li className="container">
              <a href="#" className="button">
                <span className="">30 avril 2018 -</span>
                <span className="">Titre de la newsletter 8</span>
              </a>
            </li>
            <li className="">
              <label className="">
                <span className="">23 avril 2018 -</span>
                <span className="">Titre de la newsletter 7</span>
              </label>
            </li>
            <li className="">
              <label className="">
                <span className="">16 avril 2018 -</span>
                <span className="">Titre de la newsletter 6</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Archives;
