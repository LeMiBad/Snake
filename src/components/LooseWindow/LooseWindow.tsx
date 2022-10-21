import { useStore } from 'effector-react'
import { Link } from 'react-router-dom'
import { appleCounterReset } from '../../store/apple'
import { snakeApi } from '../../store/snakeModel'
import { $timer } from '../../store/timerModel'
import css from './LooseWindow.module.sass'

const LooseWindow = ({apples, record}: {apples: number, record: number}) => {
    const closeWindow = () => {
        snakeApi.reset()
        appleCounterReset()
    }

    const timer = useStore($timer)


    return (
        <div className={css.window}>
            <h1>Вы проиграли</h1>
            <div className={css.statsWrapper}>
                <h1>Яблоков: {apples}</h1>
                <h1>{timer}</h1>
                <h1>Рекорд: {record}</h1>
            </div>
            <Link to={'/'} onClick={closeWindow}>Хорошо</Link>
        </div>
    )
}

export default LooseWindow