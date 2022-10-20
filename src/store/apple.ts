import { createEvent, createStore } from "effector"


const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max)
}



export const setLevel = createEvent<number>()
export const $apple = createStore([0, 2])
    .on(setLevel, (_, size) => {
        return [getRandomInt(size), getRandomInt(size)]
    })

export const incApple = createEvent<number>()
export const appleCounterReset = createEvent()
export const $appleCounter = createStore(0)
    .on(incApple, (counter) => counter+1)
    .on(appleCounterReset, () => 0)

export const $record = createStore(0)
    .on(incApple, (current, newRecord) => {
        if(current <= newRecord) return newRecord+1
        else return current
    })