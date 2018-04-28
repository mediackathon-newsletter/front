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
      <li className="subscription">
        <span className="title is-5">{subscription.city.name}</span>
        <span className="is-5">
          <i class="fas fa-angle-double-right fa-1x separator" />
        </span>
        <span className="subtitle is-5 ">{subscription.district.name}</span>
        <ul>
          {this.state.newsletters.map(newsletter => (
            <li>
              <Link to={`/newsletters/${newsletter.id}`}>
                Semaine {moment(newsletter.timestamp).format('W')} de{' '}
                {moment(newsletter.timestamp).format('YYYY')}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }
}

export default ArchivesSubscriptionItem;
