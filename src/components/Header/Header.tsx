import { Link } from 'react-router-dom'
import css from './Header.module.sass'

const Header = () => {
    return (
        <>
            <header>
                <a href='https://lemibad.github.io/react-game/' target={'blank'} className={css.gameName}>Квадраты</a>
                <h1 className={css.gameName}>Змейка</h1>
                <Link style={{cursor: 'pointer'}} to={'/'}>Назад</Link>
                <Link style={{cursor: 'pointer'}} to={'/settings'}>Настройки</Link>
            </header>
        </>
    )
}

export default Header