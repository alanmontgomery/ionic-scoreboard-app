import { createSelector } from 'reselect';

const getState = state => state;

//  General getters
export const getScoreboards = createSelector(getState, state => state.scoreboards);

//	Specific getters
export const getActiveScoreboard = createSelector(getState, state => state.scoreboards.filter(scoreboard => scoreboard.active === true)[0]);
export const getScoreboard = id => createSelector(getState, state => state.scoreboards.filter(scoreboard => parseInt(scoreboard.id) === parseInt(id))[0]);