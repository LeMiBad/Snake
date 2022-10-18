import { useStore } from 'effector-react'
import { $gameSize } from '../../store/levelModel'
import CenterWrapper from '../CenterWrapper/CenterWrapper'
import css from './Level.module.sass'
import { cellsGenerator } from './logic'

const Level = () => {
    const size = useStore($gameSize)


    return (
        <CenterWrapper>
            <div className={css.gameWrapper}>
                {cellsGenerator(size).map((row, i) => <div key={i} style={{height: `${100 / size}%`}} className={css.row}>{row.map((cell, key) => <div key={key} style={{width: `${100 / size}%`}} className={(cell)? css.cellLight : css.cellDark}></div>)}</div>)}
            </div>
        </CenterWrapper>
    )
}

export default Level