import React from 'react';
import { graphql, compose } from 'react-apollo';

import TOGGLE_EDITING_ARTICLE from '../../mutations/toggleEditingArticle';

const ArticleItem = ({ article: { id, title }, editAction, deleteAction }) => {
  return (
    <div>
      {title}
      <button onClick={() => editAction(id)}>Modifier</button>
      <button onClick={() => deleteAction(id)}>Supprimer</button>
    </div>
  );
};

export default ArticleItem;
