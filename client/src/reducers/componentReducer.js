export default function componentsReducer(state = {
  tournament: false
}, action) {
  switch (action.type) {
    case 'LOADING_TOURNAMENTS':
      return { ...state, loading: true}
    case 'FETCH_TOURNAMENTS':
      return {...state, loading: false, tournaments:action.payload}
    case 'ADD_TOURNAMENT':
      return {...state, tournaments:[...state.tournaments, action.payload]}
    default:
      return state;
  }
};
