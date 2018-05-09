import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import moment from 'moment';
import DatePicker from '../DatePicker';
import CREATE_NEWSLETTER from '../../mutations/createNewsletter';
import GET_NEWSLETTERS from '../../queries/getNewsletters';

class NewsletterForm extends Component {
  state = {
    date: '',
    newsletterType: ''
  };

  render() {
    const { city } = this.props;
    return (
      <Mutation
        mutation={CREATE_NEWSLETTER}
        refetchQueries={[
          { query: GET_NEWSLETTERS, variables: { city: city.id } }
        ]}
      >
        {createNewsletter => {
          return (
            <form
              onSubmit={e => {
                e.preventDefault();
                createNewsletter({
                  variables: {
                    newsletter: {
                      city: city.id,
                      date: this.state.date,
                      type: this.state.newsletterType
                    }
                  }
                });
              }}
            >
              <div className="field">
                <label className="label">Date</label>
                <div className="control">
                  <DatePicker
                    className="input"
                    overlay={true}
                    dateFormat="dd/mm/yyyy"
                    lang="fr"
                    onSelect={date => {
                      this.setState({ date });
                    }}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Type</label>

                <div className="control">
                  <div
                    className="select"
                    onChange={e =>
                      this.setState({ newsletterType: e.target.value })
                    }
                  >
                    <select value={this.state.type}>
                      <option value="">Selectionnez</option>
                      <option value="ARTICLES">Articles</option>
                      <option value="EVENTS">Evenements</option>
                    </select>
                  </div>
                </div>
              </div>
              <button type="submit" className="button is-primary">
                Creer
              </button>
            </form>
          );
        }}
      </Mutation>
    );
  }
}

export default NewsletterForm;
