import { combineReducers } from 'redux';
import tournamentsReducer from './TournamentReducer';
import holeReducer from './HoleReducer'
import teamReducer from './TeamReducer'
import scoreReducer from './ScoreReducer'


const rootReducer =  combineReducers({
  tournaments: tournamentsReducer,
  holes: holeReducer,
  teams: teamReducer,
  scores: scoreReducer
});


export default rootReducer;
