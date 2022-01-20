import { addTeam } from "./TeamProvider.js"
import { applicationEventHub } from "../utils.js"

const componentContainer = document.querySelector(".teamForm")

componentContainer.on("submit", submitEvent => {
    submitEvent.preventDefault()

    if (submitEvent.target.id === "teamForm") {
        const name = componentContainer.querySelector("input[name='name']")

        if (name.value !== "") {
            addTeam({
                name: name.value
            })
            .then(()=> {
                applicationEventHub.dispatchEvent( new CustomEvent("newData") )
            })
        }
    }
})

export const TeamForm = () => {
    componentContainer.innerHTML = `
        <h3>New Team</h3>
        <form id="teamForm">
            <fieldset>
                <input name="name" autofocus required type="text" placeholder="Team name" />
            </fieldset>
            <button class="btn btn--success btn--small" id="addTeam">Create Team</button>
        </form>
    `
}
