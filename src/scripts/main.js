import { getTeams } from "./team/TeamProvider.js"
import { getScores } from "./scoretrackers/ScoreProvider.js"
import { TruncheonsFlagons } from "./TruncheonsFlagons.js"
import { applicationEventHub } from "./utils.js"


const render = () => {
    getTeams()
        .then(getScores)
        .then(TruncheonsFlagons)

}

render()


// add event listener(s) to re-render TruncheonsFlagons when:
// a game is completed, a new player is added, a new team is added

applicationEventHub.on("newData", e => {
    render()
})