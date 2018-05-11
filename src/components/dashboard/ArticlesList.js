import React from 'react';
import ArticleItem from './ArticleItem';

const ArticlesList = ({ articles, editAction, deleteAction }) => {
  return (
    <div>
      {articles.map(article => (
        <ArticleItem
          key={article.id}
          article={article}
          editAction={editAction}
          deleteAction={deleteAction}
        />
      ))}
    </div>
  );
};

export default ArticlesList;
