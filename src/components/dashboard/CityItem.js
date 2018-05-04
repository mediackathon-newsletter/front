import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
class CityItem extends Component {
  state = {
    showForm: false,
    cityName: ''
  };

  toggleForm() {
    if (!this.state.showForm) {
      this.setState({ cityName: this.props.city.name });
    }
    this.setState({ showForm: !this.state.showForm });
  }

  render() {
    const { city, updateAction, deleteAction } = this.props;

    return (
      <form onSubmit={e => e.preventDefault()} className="columns">
        <div className="column">
          {this.state.showForm ? (
            <div className="field ">
              <div className="control  is-expanded">
                <input
                  className="input"
                  type="text"
                  value={this.state.cityName}
                  placeholder="Nom de la ville"
                  onChange={e =>
                    this.setState({
                      cityName: e.target.value
                    })
                  }
                />
              </div>
            </div>
          ) : (
            <Link to={`${this.props.match.path}/${city.id}`} className=" is-5">
              {city.name}
            </Link>
          )}
        </div>
        <div className="column is-narrow">
          <div className="buttons has-addons has-text-right">
            <a
              href="#"
              className="button"
              onClick={e => {
                e.preventDefault();
                if (this.state.showForm) {
                  updateAction({
                    id: this.props.city.id,
                    name: this.state.cityName
                  });
                }
                this.toggleForm();
              }}
            >
              Modifier
            </a>

            {this.state.showForm ? (
              <a
                href="#"
                className="button"
                onClick={e => {
                  e.preventDefault();
                  this.toggleForm();
                }}
              >
                Annuler
              </a>
            ) : (
              <a
                href="#"
                className="button"
                onClick={e => {
                  e.preventDefault();
                  deleteAction(city.id);
                }}
              >
                Supprimer
              </a>
            )}
          </div>
        </div>
      </form>
    );
  }
}

export default withRouter(CityItem);
