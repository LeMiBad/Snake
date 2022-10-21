import { createEvent, createStore } from "effector"


const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max)
}



export const setNewApple = createEvent<{size: number, cord: Array<Array<number>>}>()
export const $apple = createStore([0, 2])
    .on(setNewApple, (_, {size, cord}) => {
        const newApple: any = () => {
            let y = getRandomInt(size)
            let x = getRandomInt(size)

            for(let i = 0; i < cord.length; i++) {
                const cor = cord[i]

                if(cor[0] === y && cor[1] === x) {
                    return newApple()
                }
            }
            return [y, x]
        }

        return newApple()
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