import { createEvent, createStore } from "effector";



export const saveTimer = createEvent<string>()
export const $timer = createStore('')
    .on(saveTimer, (_, newTime) => newTime)