import { useStore } from 'effector-react'
import { $apple } from '../../store/apple'
import { $gameSize } from '../../store/settingModel'
import css from './Level.module.sass'



const CellsGenerator = () => {
    const size = useStore($gameSize)
    const cells: Array<Array<string>> = []

    for(let i = 0; i < size; i++) {
        cells.push([])
        for(let j = 0; j < size; j++) {
            if(i % 2 === 0) {
                if(j % 2 !== 0) cells[i].push("cellLight")
                else cells[i].push("cellDark")
            }
            
            else {
                if(j % 2 !== 0) cells[i].push("cellDark")
                else cells[i].push("cellLight")
            }
        }
    }

    return (
        <>
            {cells.map((row, i) => <div key={i} style={{height: `${100 / size}%`}} className={css.row}>{row.map((cellStyle, key) => <div key={key} style={{width: `${100 / size}%`}} className={css[cellStyle]}></div>)}</div>)}
        </>
    )
}

export default CellsGenerator