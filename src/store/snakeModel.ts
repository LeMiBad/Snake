import {createApi} from 'effector';
import {createStore} from 'effector'


const initialSnakePosition = {
    vector: 2,
    cord: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5]]
}

export const $snakeParams = createStore(initialSnakePosition)

export const snakeApi = createApi($snakeParams, {
    vectorUp: ({vector, cord}) => {
        if(vector !== 3) vector = 1
        return {vector: vector, cord: cord}
    },
    vectorRight: ({vector, cord}) => {
        if(vector !== 4) vector = 2
        return {vector: vector, cord: cord}
    },
    vectorDown: ({vector, cord}) => {
        if(vector !== 1) vector = 3
        return {vector: vector, cord: cord}
    },
    vectorLeft: ({vector, cord}) => {
        if(vector !== 2) vector = 4
        return {vector: vector, cord: cord}
    },
    move: ({vector, cord}) => {
        if(vector === 1) {
            cord.shift()
            cord.push([cord[cord.length-1][0]-1, cord[cord.length-1][1]])
            return {vector: vector, cord: cord}
        }
        else if(vector === 2) {
            cord.shift()
            cord.push([cord[cord.length-1][0], cord[cord.length-1][1]+1])
            return {vector: vector, cord: cord}
        }
        else if(vector === 3) {
            cord.shift()
            cord.push([cord[cord.length-1][0]+1, cord[cord.length-1][1]])
            return {vector: vector, cord: cord}
        }
        else if(vector === 4) {
            cord.shift()
            cord.push([cord[cord.length-1][0], cord[cord.length-1][1]-1])
            return {vector: vector, cord: cord}
        }
    }
})