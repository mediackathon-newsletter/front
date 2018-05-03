import React from 'react';

const CityForm = ({ createAction, toggle }) => {
  let name;

  return (
    <form
      className="form"
      onSubmit={e => {
        e.preventDefault();
        createAction({ name: name.value });
        toggle();
      }}
    >
      <h1 className="title is-5">Ajouter une ville</h1>
      <div className="field has-addons">
        <div className="control  is-expanded">
          <input
            className="input"
            type="text"
            placeholder="Nom de la ville"
            ref={node => {
              name = node;
            }}
          />
        </div>
        <div className="control">
          <button className="button" type="submit">
            Ajouter
          </button>
        </div>
      </div>
    </form>
  );
};

export default CityForm;
