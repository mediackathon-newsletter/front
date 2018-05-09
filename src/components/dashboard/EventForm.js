import React, { Component } from 'react';
import DistrictSelect from './DistrictSelect';
import CategorySelect from './CategorySelect';
import DatePicker from '../DatePicker';

class EventForm extends Component {
  state = {
    title: '',
    subtitle: '',
    date: ''
  };

  render() {
    const { createAction, newsletter } = this.props;

    return (
      <div>
        <h2 className="title is-5">Nouvel Evenement</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.createAction();
          }}
        >
          <div className="field">
            <label className="label">Titre</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={this.state.title}
                onChange={e => {
                  this.setState({ title: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Resumé</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={this.state.subtitle}
                onChange={e => {
                  this.setState({ subtitle: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Date</label>
            <div className="control">
              <DatePicker onSelect={date => this.setState({ date })} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EventForm;
