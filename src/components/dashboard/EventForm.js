import React, { Component } from 'react';
import { Mutation, graphql, compose } from 'react-apollo';

import CategorySelect from './CategorySelect';
import DatePicker from '../DatePicker';
import DistrictSelect from './DistrictSelect';

import CREATE_EVENT from '../../mutations/createEvent';
import GET_EVENTS from '../../queries/getEvents';
import UPDATE_EVENT from '../../mutations/updateEvent';
import TOGGLE_EDITING_EVENT from '../../mutations/toggleEditingEvent';

class EventForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
  }

  static getDerivedStateFromProps({ newsletter, events }, prevState) {
    if (events) {
      const event = events.find(e => e.editing === true);
      if (event) {
        return {
          id: event.id,
          title: event.title,
          subtitle: event.subtitle,
          text: event.text,
          category: event.category.id,
          district: event.district.id,
          newsletter: newsletter.id,
          city: newsletter.city,
          date: event.date,
          editing: true
        };
      }
    }

    return {
      newsletter: newsletter.id,
      city: newsletter.city,
      id: '',
      title: '',
      subtitle: '',
      text: '',
      category: '',
      district: '',
      date: '',
      editing: false
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.editing) {
      this.createEvent();
    } else {
      this.updateEvent();
    }
  }

  createEvent() {
    const {
      newsletter,
      title,
      subtitle,
      text,
      category,
      district,
      date
    } = this.state;
    this.props.createEvent({
      variables: {
        event: {
          newsletter,
          category,
          district,
          title,
          subtitle,
          text,
          date
        }
      }
    });
  }

  updateEvent() {
    const {
      id,
      newsletter,
      title,
      subtitle,
      text,
      category,
      district
    } = this.state;
    this.props.updateEvent({
      variables: {
        event: {
          id,
          newsletter,
          category,
          district,
          title,
          subtitle,
          text
        }
      }
    });
  }

  render() {
    return (
      <div>
        <h2 className="title is-5">
          {this.state.editing ? `Modifier l'event` : `Nouvel Event`}
        </h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
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
            <label className="label">Sous-titre</label>
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
            <label className="label">Corps</label>
            <div className="control">
              <textarea
                value={this.state.text}
                className="textarea"
                onChange={e => {
                  this.setState({ text: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Date</label>
            <div className="control">
              <DatePicker
                className="input"
                onSelect={date => this.setState({ date })}
                overlay={true}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Quartier</label>
            <div className="control">
              <DistrictSelect
                city={this.state.city}
                district={this.state.district}
                onSelect={district => this.setState({ district })}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Categorie</label>
            <div className="control">
              <CategorySelect
                category={this.state.category}
                onSelect={category => {
                  this.setState({ category });
                }}
              />
            </div>
          </div>

          <button type="submit" className="button is-primary">
            {this.state.editing ? `Modifier` : 'Créer'}
          </button>
          {this.state.editing ? (
            <Mutation
              mutation={TOGGLE_EDITING_EVENT}
              variables={{ id: this.state.eventId }}
            >
              {(toggleEditingEvent, { loading, error }) => (
                <button
                  type="button"
                  className="button is-primary"
                  onClick={() => {
                    toggleEditingEvent({
                      variables: { id: this.state.id }
                    });
                  }}
                >
                  Annuler
                </button>
              )}
            </Mutation>
          ) : null}
        </form>
      </div>
    );
  }
}

export default compose(
  graphql(CREATE_EVENT, {
    name: 'createEvent',
    options: ({ newsletter: { id } }) => ({
      refetchQueries: [{ query: GET_EVENTS, variables: { newsletter: id } }]
    })
  }),
  graphql(UPDATE_EVENT, {
    name: 'updateEvent',
    options: ({ newsletter: { id } }) => ({
      refetchQueries: [{ query: GET_EVENTS, variables: { newsletter: id } }]
    })
  })
)(EventForm);
