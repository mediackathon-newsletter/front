import React, { Component } from 'react';
import { fetchNewsletter } from '../helpers/Api';
import { Link } from 'react-router-dom';
class Newsletter extends Component {
  state = {};

  componentDidMount() {
    console.log(this.props);

    fetchNewsletter(this.props.match.params.id).then(({ data }) =>
      this.setState({ newsletter: data })
    );
  }

  render() {
    const { newsletter } = this.state;

    if (!newsletter) return <div />;

    return (
      <section className="section newsletter">
        <div className="box">
          <span>
            <Link to="/archives">
              <i class="fas fa-angle-left fa-4x" />
            </Link>
          </span>
          <h1 className="title is-2">Newsletter {newsletter.timestamp}</h1>
        </div>
      </section>
    );
  }
}

export default Newsletter;
