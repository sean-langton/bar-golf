import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tournament from './containers/TournamentContainer'
import Hole from './containers/HoleContainer'
import Team from './containers/TeamContainer'
import Score from './containers/ScoreContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import './bootstrap.min.css';


const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

ReactDOM.render((
  <Router>
    <Provider store={store}>
      <React.Fragment>
        <Route path="/" component={App} />
        <Route exact path="/tournament" component={Tournament} />
        <Route path={`/tournament/:tournament_id/holes`} component={Hole} />
        <Route path={`/tournament/:tournament_id/teams`} component={Team} />
        <Route path={`/tournament/:tournament_id/scores`} component={Score} />
      </React.Fragment>
    </Provider>
  </Router>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
