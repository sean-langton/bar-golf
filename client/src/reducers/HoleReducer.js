export default function holeReducer(state = {
  loading: false,
  tournament_id: "",
  tournament: {},
  holes: []
}, action) {
  switch (action.type) {
    case 'LOADING_HOLES':
      return { ...state, loading: true}
    case 'FETCH_HOLES':
      return {...state, loading: false, holes: action.payload}
    case 'LOADING_TOURNAMENT':
      return { ...state, loading: true}
    case 'FETCH_TOURNAMENT':
      return {...state, loading: false, tournament:action.payload}
    case 'ADD_HOLE':
        return {...state, holes:[...state.holes, action.payload]}
    default:
      return state;
  }
};
