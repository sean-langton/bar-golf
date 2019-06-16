export default function scoreReducer(state = {
  loading: false,
  tournament_id: "",
  holes: [],
  players: [],
  scores: []
}, action) {
  switch (action.type) {
    case 'LOADING_HOLES':
      return { ...state, loading: true}
    case 'FETCH_HOLES':
      return {...state, loading: false, holes:action.payload}
    case 'LOADING_PLAYERS':
      return { ...state, loading: true}
    case 'FETCH_PLAYERS':
      return {...state, loading: false, players:action.payload}
    case 'LOADING_SCORES':
      return { ...state, loading: true}
    case 'FETCH_SCORES':
      return {...state, loading: false, scores:action.payload}
    case 'ADD_SCORE':
      return {...state, loading: false, scores:[...state.holes, action.payload]}
    default:
      return state;
  }
};
