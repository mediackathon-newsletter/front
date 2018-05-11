import React, { Component } from 'react';
import { Query } from 'react-apollo';
import GET_CATEGORIES from '../../queries/getCategories';

const CategorySelect = ({ onSelect, category }) => {
  return (
    <Query query={GET_CATEGORIES}>
      {({ loading, error, data: { categories } }) => {
        if (loading) {
          return <div />;
        }

        if (error) {
          return <div />;
        }

        return (
          <div className="select is-fullwidth">
            <select
              value={category}
              onChange={e => {
                if (onSelect) {
                  onSelect(e.target.value);
                }
              }}
            >
              <option key="default" value="">
                Selectionnez une Categorie
              </option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        );
      }}
    </Query>
  );
};

export default CategorySelect;
