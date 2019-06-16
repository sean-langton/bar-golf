export function fetchTeams(tournament_id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_TEAMS' });
  return fetch(`/api/tournament/${tournament_id}/team`)
    .then(response => {
      return response.json()
    }).then(payload => dispatch({ type: 'FETCH_TEAMS', payload }));
  };
}

export function fetchTournament(tournament_id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_TOURNAMENTS' });
  return fetch(`/api/tournament/${tournament_id}`)
    .then(response => {
      return response.json()
    }).then(payload => dispatch({ type: 'FETCH_TOURNAMENT', payload }));
  };
}

export function addTeam(payload) {
  return (dispatch) => {
    dispatch({ type: 'CREATING_TEAM' });
  return fetch(`/api/tournament/${payload.tournament_id}/team`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json()
  }).then(payload => dispatch({ type: 'ADD_TEAM', payload }));
  };
}

export function deleteTeam(payload) {
  return (dispatch) => {
    dispatch({ type: 'DELETING_TEAM' });
  return fetch(`/api/team/${payload.team_id}`, {
    method: 'DELETE',
    body: JSON.stringify(payload),
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(response => {
      return response.json()
    }).then(payload => dispatch({ type: 'FETCH_TEAMS', payload }));
  };
}

export function addPlayer(payload) {
  return (dispatch) => {
    dispatch({ type: 'CREATING_PLAYER' });
  return fetch('/api/player', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json()
  }).then(payload => dispatch({ type: 'FETCH_TEAMS', payload }));
  };
}
