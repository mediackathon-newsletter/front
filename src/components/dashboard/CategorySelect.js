import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import GET_CATEGORIES from '../../queries/getCategories';

const CategorySelect = ({
  onSelect,
  getCategories: { categories, loading, error }
}) => {
  if (loading) {
    return <div />;
  }

  if (error) {
    return <div />;
  }

  return (
    <div className="select is-fullwidth">
      <select
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
};

export default graphql(GET_CATEGORIES, { name: 'getCategories' })(
  CategorySelect
);
