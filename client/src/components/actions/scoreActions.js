export function fetchHoles(tournament_id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_HOLES' });
  return fetch(`/api/tournament/${tournament_id}/hole`)
    .then(response => {
      return response.json()
    }).then(payload => dispatch({ type: 'FETCH_HOLES', payload }));
  };
}

export function fetchPlayers(tournament_id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PLAYERS' });
  return fetch(`/api/tournament/${tournament_id}/player`)
    .then(response => {
      return response.json()
    }).then(payload => dispatch({ type: 'FETCH_PLAYERS', payload }));
  };
}

export function fetchScores(tournament_id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_SCORES' });
  return fetch(`/api/tournament/${tournament_id}/score`)
    .then(response => {
      return response.json()
    }).then(payload => dispatch({ type: 'FETCH_SCORES', payload }));
  };
}

export function addScore(payload) {
  return (dispatch) => {
    dispatch({ type: 'CREATING_SCORE' });
  return fetch('/api/score', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json()
  }).then(payload => dispatch({ type: 'ADD_SCORE', payload }));
  };
}
