import {createApi} from 'effector';
import {createStore} from 'effector'


const initialSnakePosition = {
    vector: 0,
    cord: [[0, 0], [0, 1]],
    isLoose: false
}

export const $snakeParams = createStore(initialSnakePosition)

export const snakeApi = createApi($snakeParams, {
    vectorUp: ({vector, cord, isLoose}) => {
        if(vector !== 3) vector = 1
        return {vector: vector, cord: cord, isLoose: isLoose}
    },
    vectorRight: ({vector, cord, isLoose}) => {
        if(vector !== 4) vector = 2
        return {vector: vector, cord: cord, isLoose: isLoose}
    },
    vectorDown: ({vector, cord, isLoose}) => {
        if(vector !== 1) vector = 3
        return {vector: vector, cord: cord, isLoose: isLoose}
    },
    vectorLeft: ({vector, cord, isLoose}) => {
        if(vector !== 2) vector = 4
        return {vector: vector, cord: cord, isLoose: isLoose}
    },
    move: ({vector, cord, isLoose}, size) => {
        if(vector === 0) {
            return {vector: vector, cord:cord, isLoose: isLoose}
        }
        if(vector === 1) {
            if(cord[cord.length-1][0] === 0) {
                isLoose = true
            }
            else {
                cord.shift()
                cord.push([cord[cord.length-1][0]-1, cord[cord.length-1][1]])
            }
            return {vector: vector, cord: cord, isLoose: isLoose}
        }
        else if(vector === 2) {
            if(cord[cord.length-1][1] === size-1) {
                isLoose = true
            }
            else {
                cord.shift()
                cord.push([cord[cord.length-1][0], cord[cord.length-1][1]+1])
            }
            return {vector: vector, cord: cord, isLoose: isLoose}
        }
        else if(vector === 3) {
            if(cord[cord.length-1][0] === size-1) {
                isLoose = true
            }
            else {
                cord.shift()
                cord.push([cord[cord.length-1][0]+1, cord[cord.length-1][1]])
            }
            return {vector: vector, cord: cord, isLoose: isLoose}
        }
        else if(vector === 4) {
            if(cord[cord.length-1][1] === 0) {
                isLoose = true
            }
            else {
                cord.shift()
                cord.push([cord[cord.length-1][0], cord[cord.length-1][1]-1])
            }
            return {vector: vector, cord: cord, isLoose: isLoose}
        }
    },
    eat: ({vector, cord, isLoose}) => {
        if(vector === 1) {
            cord.unshift([cord[cord.length-1][0], cord[cord.length-1][1]])
            return {vector: vector, cord: cord, isLoose}
        }
        else if(vector === 2) {
            cord.unshift([cord[cord.length-1][0], cord[cord.length-1][1]])
            return {vector: vector, cord: cord, isLoose}
        }
        else if(vector === 3) {
            cord.unshift([cord[cord.length-1][0], cord[cord.length-1][1]])
            return {vector: vector, cord: cord, isLoose}
        }
        else if(vector === 4) {
            cord.unshift([cord[cord.length-1][0], cord[cord.length-1][1]])
            return {vector: vector, cord: cord, isLoose}
        }
    },
    reset: () => {
        return {
            vector: 0,
            cord: [[0, 0], [0, 1]],
            isLoose: false
        }
    }
})