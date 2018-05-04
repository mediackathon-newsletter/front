import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Articles from './Articles';
import Categories from './Categories';
import Cities from './Cities';
import City from './City';
import Newsletters from './Newsletters';

const DashboardLink = ({ children, to, exact }) => (
  <Route
    path={to}
    exact={exact}
    children={({ match }) => (
      <li className={match ? 'is-active' : ''}>
        <Link className="subtitle is-4" to={to}>
          {children}
        </Link>
      </li>
    )}
  />
);

const Dashboard = ({ match }) => {
  return (
    <section className="section">
      <div className="box">
        <h1 className="title is-1">Dashboard</h1>
        <Router>
          <div>
            <div className="tabs is-centered">
              <ul>
                <DashboardLink to={`${match.path}/articles`}>
                  Articles
                </DashboardLink>
                <DashboardLink to={`${match.path}/categories`}>
                  Categories
                </DashboardLink>
                <DashboardLink to={`${match.path}/newsletters`}>
                  Newsletters
                </DashboardLink>

                <DashboardLink to={`${match.path}/cities`} exact={false}>
                  Villes
                </DashboardLink>
              </ul>
            </div>
            <Route path={`${match.path}/articles`} component={Articles} />
            <Route
              exact
              path={`${match.path}/categories`}
              component={Categories}
            />
            <Route exact path={`${match.path}/cities/:id`} component={City} />
            <Route exact path={`${match.path}/cities`} component={Cities} />

            <Route path={`${match.path}/newsletters`} component={Newsletters} />
          </div>
        </Router>
      </div>
    </section>
  );
};

export default Dashboard;
