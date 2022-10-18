export const cellsGenerator = (size: number) => {
    const cells: Array<Array<boolean>> = []
    for(let i = 0; i < size; i++) {
        cells.push([])
        for(let j = 0; j < size; j++) {
            if(i % 2 === 0) {
                if(j % 2 !== 0) cells[i].push(true)
                else cells[i].push(false)
            }
            
            else {
                if(j % 2 !== 0) cells[i].push(false)
                else cells[i].push(true)
            }
        }
    }
    return cells
}