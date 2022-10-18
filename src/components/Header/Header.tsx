import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import css from './Header.module.sass'

const Header = () => {
    const [url, setUrl] = useState(null) as any

    const toMain = () => {
        setTimeout(() => {
            setUrl('/')
        }, 1500)
        setUrl(null)
    }

    if(url) return <Navigate to={`${url}`}/>

    return (
        <>
            <header>
                <a href='https://lemibad.github.io/react-game/' target={'blank'} className={css.gameName}>Квадраты</a>
                <h1 className={css.gameName}>Змейка</h1>
                <button onClick={toMain} style={{cursor: 'pointer'}}>Назад</button>
                <Link style={{cursor: 'pointer'}} to={'/settings'}>Настройки</Link>
            </header>
        </>
    )
}

export default Header