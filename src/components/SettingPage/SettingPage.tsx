import { useStore } from 'effector-react'
import { Link } from 'react-router-dom'
import { appleCounterReset } from '../../store/apple'
import { $gameSize, changeGameSize } from '../../store/settingModel'
import { snakeApi } from '../../store/snakeModel'
import CenterWrapper from '../CenterWrapper/CenterWrapper'
import css from './SettingPage.module.sass'

const SettingPage = () => {
    const gameSize = useStore($gameSize)

    const handleChangeGameSize = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeGameSize(+e.target.value)
    }

    const handleLink = () => {
        snakeApi.reset()
        appleCounterReset()
    }

    return (
        <CenterWrapper>
            <div className={css.wrapper}>
                <div className={css.setting}>
                    <div className={css.range}>
                        <div>Размер поля</div>
                        <input min={3} max={50} value={gameSize} onChange={handleChangeGameSize} type={'range'}></input>
                    </div>
                    <h1>{gameSize}</h1>
                </div>
                <Link onClick={handleLink} to={'/game'}>Начать!</Link>
            </div>
        </CenterWrapper>
    )
}

export default SettingPage