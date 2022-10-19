import { useStore } from 'effector-react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { $enterNumber, changeUrl } from '../../store/animationModel'
import css from './Header.module.sass'

const Header = () => {
    const location = useLocation()
    const enterNumber = useStore($enterNumber)
    useEffect(() => {
        changeUrl()
    }, [location])


    let animationName = css.slidein
    if(enterNumber > 1) {
        if(location.pathname === '/game') {
            animationName = css.out
        } 
        else if (location.pathname !== '/game') {
            animationName = css.enter
        }
    }
    

    return (
        <>
            <header className={animationName}>
                <a href='https://lemibad.github.io/react-game/' target={'blank'} className={css.gameName}>Квадраты</a>
                <h1 className={css.gameName}>Змейка</h1>
                <Link style={{cursor: 'pointer'}} to={'/'}>Назад</Link>
                <Link style={{cursor: 'pointer'}} to={'/settings'}>Настройки</Link>
            </header>
        </>
    )
}

export default Header