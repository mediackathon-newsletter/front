import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import GET_NEWSLETTERS from '../queries/getNewsletters';
import moment from 'moment';

const ArchivesList = ({ city }) => {
  return (
    <Query query={GET_NEWSLETTERS} variables={{ city: city.id }}>
      {({ loading, error, data: { newsletters } }) => {
        if (loading) {
          return <div>Chargement...</div>;
        }

        if (error) {
          return <div>Erreur...</div>;
        }

        return (
          <li className="subscription box">
            <span className="subtitle is-4">
              <i class="fas fa-building" /> {city.name}
            </span>

            <ul style={{ 'margin-top': '1.5em' }}>
              {newsletters.length != 0 ? (
                <ul>
                  {newsletters.map(newsletter => (
                    <li>
                      <i class="far fa-calendar-alt" />{' '}
                      <Link to={`/newsletters/${newsletter.id}`}>
                        Newsletter #{moment(newsletter.timestamp).format('W')}/{moment(
                          newsletter.timestamp
                        ).format('YYYY')}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="message is-warning">
                  <div class="message-body">
                    Aucune newsletter. <i class="far fa-frown" />
                  </div>
                </div>
              )}
            </ul>
          </li>
        );
      }}
    </Query>
  );
};

export default ArchivesList;
