export const snakeRender = (size: number, snake: Array<Array<number>>) => {
    const cells: Array<Array<string>> = []


    for(let i = 0; i < size; i++) {
        cells.push([])
        for(let j = 0; j < size; j++) {
            cells[i].push("empty")
        }
    }

    for(let i = 0; i< snake.length; i++) {
        const pos = snake[i]

        if(i === snake.length - 1) {
            cells[pos[0]][pos[1]] = 'head'
            break
        }

        cells[pos[0]][pos[1]] = 'body'
    }
    
    return cells
}