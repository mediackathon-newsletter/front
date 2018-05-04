import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class DistrictItem extends Component {
  state = {
    showForm: false,
    districtName: ''
  };

  toggleForm() {
    if (!this.state.showForm) {
      this.setState({ districtName: this.props.district.name });
    }
    this.setState({ showForm: !this.state.showForm });
  }

  render() {
    const { district, updateAction, deleteAction } = this.props;

    return (
      <form onSubmit={e => e.preventDefault()} className="columns">
        <div className="column">
          {this.state.showForm ? (
            <div className="field ">
              <div className="control  is-expanded">
                <input
                  className="input"
                  type="text"
                  value={this.state.districtName}
                  placeholder="Nom du quartier"
                  onChange={e =>
                    this.setState({
                      districtName: e.target.value
                    })
                  }
                />
              </div>
            </div>
          ) : (
            <div className=" is-5">{district.name}</div>
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
                    id: this.props.district.id,
                    name: this.state.districtName
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
                  deleteAction(district.id);
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

export default DistrictItem;
