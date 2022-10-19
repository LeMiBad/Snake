import { Link } from 'react-router-dom'
import CenterWrapper from '../CenterWrapper/CenterWrapper'
import CellsGenerator from './CellsGenerator'
import css from './Level.module.sass'
import Snake from './Snake'

const Level = () => {
    return (
        <CenterWrapper>
            <>
                <div className={css.gameWrapper}>
                    <Link style={{zIndex: 3000}} to={'/'}>gg</Link>
                    <CellsGenerator/>
                </div>
                <div className={css.snakeWrapper}>
                    <Link style={{zIndex: 3000}} to={'/'}>gg</Link>
                    <Snake/>
                </div>
            </>
        </CenterWrapper>
    )
}

export default Level