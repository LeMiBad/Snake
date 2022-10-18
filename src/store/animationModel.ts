import { createEvent, createStore } from "effector";


export const changeUrl = createEvent<number>()

export const $currentUrl = createStore(0)
    .on(changeUrl, (_, i) => {
        console.log(i)
        return i
    })