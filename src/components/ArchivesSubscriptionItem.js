import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchNewsletters } from '../helpers/Api';
import moment from 'moment';

class ArchivesSubscriptionItem extends Component {
  state = {};

  componentDidMount() {
    this.fetchNewsletters();
  }

  fetchNewsletters() {
    const { subscription } = this.props;

    fetchNewsletters(subscription.city, subscription.district).then(
      ({ data }) => this.setState({ newsletters: data })
    );
  }

  render() {
    const { subscription } = this.props;
    const { newsletters } = this.state;

    if (!newsletters) {
      return <div />;
    }

    console.log(new Date());

    newsletters.sort((a, b) => a.timestamp < b.timestamp);

    return (
      <li className="subscription box">
        <span className="subtitle is-4">
          <i class="fas fa-building" /> {subscription.city.name}
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
  }
}

export default ArchivesSubscriptionItem;
