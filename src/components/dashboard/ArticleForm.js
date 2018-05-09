import React from 'react';
import DistrictSelect from './DistrictSelect';
import CategorySelect from './CategorySelect';

const ArticleForm = ({ createAction, newsletter }) => {
  console.log(newsletter);
  return (
    <div>
      <h2 className="title is-5">Nouvel article</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.createAction();
        }}
      >
        <div className="field">
          <label className="label">Titre</label>
          <div className="control">
            <input className="input" type="text" />
          </div>
        </div>
        <div className="field">
          <label className="label">Sous-Titre</label>
          <div className="control">
            <input className="input" type="text" />
          </div>
        </div>
        <div className="field">
          <label className="label">Corps</label>
          <div className="control">
            <textarea className="textarea" />
          </div>
        </div>
        <div className="field">
          <label className="label">Quartier</label>
          <div className="control">
            <DistrictSelect city={newsletter.city} />
          </div>
        </div>
        <div className="field">
          <label className="label">Categorie</label>
          <div className="control">
            <CategorySelect />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ArticleForm;
