import React from 'react';

const CityItem = ({ city, updateAction, deleteAction }) => {
  return (
    <div className="columns">
      <div className="column">
        <p className=" is-5">{city.name}</p>
      </div>
      <div className="column is-narrow">
        <div className="buttons has-addons has-text-right">
          <a
            href="#"
            className="button"
            onClick={e => {
              e.preventDefault();
              updateAction(city.id);
            }}
          >
            Modifier
          </a>

          <a
            href="#"
            className="button"
            onClick={e => {
              e.preventDefault();
              deleteAction(city.id);
            }}
          >
            Supprimer
          </a>
        </div>
      </div>
    </div>
  );
};

export default CityItem;
