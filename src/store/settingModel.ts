import {createEvent } from 'effector';
import {createStore} from 'effector'



export const changeGameSize = createEvent<number>()
export const $gameSize = createStore(20)
    .on(changeGameSize, (_, size) => size)