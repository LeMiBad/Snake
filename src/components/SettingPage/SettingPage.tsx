import { Link } from 'react-router-dom'
import CenterWrapper from '../CenterWrapper/CenterWrapper'
import css from './SettingPage.module.sass'

const SettingPage = () => {
    return (
        <CenterWrapper>
            <div className={css.wrapper}>
                <div className={css.setting}>
                    <div className={css.range}>
                        <div>Размер поля</div>
                        <input type={'range'}></input>
                    </div>
                    <h1>31</h1>
                </div>
                <div className={css.setting}>
                <div className={css.range}>
                        <div>Скорость змейки</div>
                        <input type={'range'}></input>
                    </div>
                    <h1>31</h1>
                </div>
                <div className={css.setting}>
                <div className={css.range}>
                        <div>Количество яблок</div>
                        <input type={'range'}></input>
                    </div>
                    <h1>31</h1>
                </div>

                <Link to={'/game'}>Начать!</Link>
            </div>
        </CenterWrapper>
    )
}

export default SettingPage