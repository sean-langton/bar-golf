export default function teamReducer(state = {
  loading: false,
  tournament_id: "",
  tournament: {},
  teams: []
}, action) {
  switch (action.type) {
    case 'LOADING_TEAMS':
      return { ...state, loading: true}
    case 'FETCH_TEAMS':
      return {...state, loading: false, teams: action.payload}
    case 'LOADING_TOURNAMENT':
      return { ...state, loading: true}
    case 'FETCH_TOURNAMENT':
      return {...state, loading: false, tournament:action.payload}
    case 'ADD_TEAM':
        return {...state, teams:[...state.teams, action.payload]}
    default:
      return state;
  }
};
