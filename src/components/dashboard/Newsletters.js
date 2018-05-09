import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import CitySelect from './CitySelect';
import NewsletterForm from './NewsletterForm';
import NewslettersList from './NewslettersList';
import GET_CITY from '../../queries/getCity';

class Newsletters extends Component {
  handleCitySelect({ id }) {
    this.props.history.push(`/dashboard/cities/${id}/newsletters`);
  }

  render() {
    const { match: { params: { city_id: id } } } = this.props;

    if (!id) {
      return (
        <div>
          <h1 className="title is-4">Selectionnez une ville</h1>
          <CitySelect onSelect={this.handleCitySelect.bind(this)} />
        </div>
      );
    }

    return (
      <Query query={GET_CITY} variables={{ id }}>
        {({ loading, error, data: { city } }) => {
          if (loading) return <div />;
          if (error) return <div />;
          return (
            <div>
              <div className="columns">
                <div className="column is-narrow">
                  <p className="buttons">
                    <Link className="button" to={`/dashboard/newsletters`}>
                      <span className="icon">
                        <i className="far fa-arrow-alt-circle-left" />
                      </span>
                    </Link>
                  </p>
                </div>
                <div className="column">
                  <h1 className="title is-4">Newsletters de {city.name}</h1>
                </div>
              </div>

              <NewslettersList city={city} />
              <h2 className="title is-5">Creer une newsletter</h2>
              <NewsletterForm city={city} />
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Newsletters;
