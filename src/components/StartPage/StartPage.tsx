import css from './StartPage.module.sass'
import phone from './../../icons/phone.svg'
import computer from './../../icons/computer.svg'
import CenterWrapper from '../CenterWrapper/CenterWrapper'
import { Link } from 'react-router-dom'
import { snakeApi } from '../../store/snakeModel'
import { appleCounterReset } from '../../store/apple'


const StartPage = () => {
    const handleLink = () => {
        snakeApi.reset()
        appleCounterReset()
    }

    return (
        <CenterWrapper>
            <div className={css.startWindow}>
                <h1>Приветствую!</h1>
                <div className={css.controlInfo}>
                    <div className={css.control}>
                        <img width={'50%'} alt='phone' src={phone}></img>
                        <h1 className={css.rule}>Свайпы для выбора направления</h1>
                    </div>
                    <div className={css.control}>
                        <img width={'50%'} alt='computer' src={computer}></img>
                        <h1 className={css.rule}>W A S D для выбора направления</h1>
                    </div>
                </div>
                <Link onClick={handleLink} to={'/game'}>Начать!</Link>
            </div>
        </CenterWrapper>
    )
}

export default StartPage