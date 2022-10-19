import { createEvent, createStore } from "effector";


export const changeUrl = createEvent()

export const $enterNumber = createStore(0)
    .on(changeUrl, (enterNumber) => enterNumber+1)