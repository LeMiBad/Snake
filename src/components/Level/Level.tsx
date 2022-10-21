import { useStore } from 'effector-react'
import { $appleCounter, $record } from '../../store/apple'
import { $snakeParams } from '../../store/snakeModel'
import CenterWrapper from '../CenterWrapper/CenterWrapper'
import LooseWindow from '../LooseWindow/LooseWindow'
import CellsGenerator from './CellsGenerator'
import css from './Level.module.sass'
import Snake from './Snake'
import Timer from './Timer'

const Level = () => {
    const appleCounter = useStore($appleCounter)
    const record = useStore($record)
    const { isLoose } = useStore($snakeParams)

    const loose = () => {
        if(isLoose) {
            return <LooseWindow apples={appleCounter} record={record}/>
        }
        else return <></>
    }
    
    return (
        <CenterWrapper>
            <>
                {loose()}
                <div className={css.stats}>
                    <div><div>{appleCounter} Яблок</div></div>
                    <div><div>Максимум: {record}</div></div>
                    <div><Timer/></div>
                </div>
                <div className={css.gameWrapper}>
                    <CellsGenerator/>
                </div>
                <div className={css.snakeWrapper}>
                    <Snake/>
                </div>
            </>
        </CenterWrapper>
    )
}

export default Level