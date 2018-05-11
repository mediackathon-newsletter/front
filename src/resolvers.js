import gql from 'graphql-tag';

export const resolvers = {
  Mutation: {
    toggleEditingArticle: (_, variables, { cache, getCacheKey }) => {
      const id = getCacheKey({ __typename: 'Article', id: variables.id });
      const fragment = gql`
        fragment editArticle on Article {
          editing
        }
      `;
      const article = cache.readFragment({ fragment, id });
      const data = { ...article, editing: !article.editing };
      cache.writeData({ id, data });
      return null;
    },
    toggleEditingEvent: (_, variables, { cache, getCacheKey }) => {
      const id = getCacheKey({ __typename: 'Event', id: variables.id });
      const fragment = gql`
        fragment editEvent on Event {
          editing
        }
      `;
      const event = cache.readFragment({ fragment, id });
      const data = { ...event, editing: !event.editing };
      cache.writeData({ id, data });
      return null;
    }
  }
};
