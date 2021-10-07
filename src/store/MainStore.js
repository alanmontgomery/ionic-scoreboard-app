import { Store } from "pullstate";

const MainStore = new Store({
	
	players: [],
	scoreboards: []
});

export default MainStore;

export const markActiveAsDone = () => {

	MainStore.update(state => {
		
		const scoreboardIndex = state.scoreboards.findIndex(scoreboard => scoreboard.active === true);
		state.scoreboards[scoreboardIndex].done = true;
	});
}

export const addScoreboard = (players, details) => {

	MainStore.update(s => { s.scoreboards = s.scoreboards.map(scoreboard => scoreboard.active = false) });

	const newScoreboard = {

		id: Date.now(),
		title: details.title,
		players: [ ...players ],
		active: true
	};

	const playersToSave = players.filter(p => p.saved === true);

	MainStore.update(s => { s.scoreboards = [ ...s.scoreboards, newScoreboard ] });
	MainStore.update(s => { s.players = [ ...s.players, ...playersToSave ] });
}

export const addScoreToPlayer = (scoreboardId, playerIndex) => {

	MainStore.update(state => {
		
		const scoreboardIndex = state.scoreboards.findIndex(scoreboard => scoreboard.id === parseInt(scoreboardId));
		state.scoreboards[scoreboardIndex].players[playerIndex].score += 1;

		state.scoreboards[scoreboardIndex].players.sort((a, b) => {
			if (a.score > b.score) return -1
			return a.score < b.score ? 1 : 0
		});
	});
}