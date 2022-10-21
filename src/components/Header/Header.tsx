import { useStore } from 'effector-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { $enterNumber, changeUrl } from '../../store/animationModel'
import css from './Header.module.sass'

const Header = () => {
    const [arrowVector, setArrowVector] = useState('▼')
    const [mobileAnim, mobileAnimVector] = useState('')

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
    
    const handleArrowClick = () => {
        if(arrowVector === '▼') setArrowVector('▲')
        else setArrowVector('▼')
        if(mobileAnim === css.mobileEnter || '') mobileAnimVector(css.mobileClose)
        else mobileAnimVector(css.mobileEnter)
    }

    return (
        <>
            <header className={animationName}>
                <a href='https://lemibad.github.io/react-game/' target={'blank'} className={css.gameName}>Квадраты</a>
                <h1 className={css.gameName}>Змейка</h1>
                <Link style={{cursor: 'pointer'}} to={'/'}>Назад</Link>
                <Link style={{cursor: 'pointer'}} to={'/settings'}>Настройки</Link>
            </header>
            <header style={{display: 'none', animationName: mobileAnim}} className={css.mobileHeader}>
                <Link onClick={handleArrowClick} style={{cursor: 'pointer'}} to={'/settings'}>Настройки</Link>
                <a onClick={handleArrowClick} href='https://lemibad.github.io/react-game/' target={'blank'} className={css.gameName}>Квадраты</a>
                <Link onClick={handleArrowClick} style={{cursor: 'pointer'}} to={'/'}>Назад</Link>
                <h1 onClick={handleArrowClick}>{arrowVector}</h1>
            </header>
        </>
    )
}

export default Header