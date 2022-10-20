import { useStore } from 'effector-react'
import { useEffect } from 'react'
import { $apple, $appleCounter, incApple, setLevel } from '../../store/apple'
import { $gameSize } from '../../store/settingModel'
import { $snakeParams, snakeApi } from '../../store/snakeModel'
import css from './Level.module.sass'

const Snake = () => {
    const cells: Array<Array<string>> = []
    const size = useStore($gameSize)
    const { cord } = useStore($snakeParams)
    const apple = useStore($apple)
    const appleCounter = useStore($appleCounter)

    
    useEffect(() => {
        if (apple[0] === cord[cord.length - 1][0] && apple[1] === cord[cord.length - 1][1]) {
            snakeApi.eat()
            setLevel(size)
            incApple(appleCounter)
        }
    })
    
    for (let i = 0; i < size; i++) {
        cells.push([])
        for (let j = 0; j < size; j++) {
            cells[i].push("empty")
        }
    }
    
    for (let i = 0; i < cord.length; i++) {
        const pos = cord[i]
        
        if (i === cord.length - 1) {
            cells[pos[0]][pos[1]] = 'head'
            break
        }
        
        cells[pos[0]][pos[1]] = 'body'
    }
    cells[apple[0]][apple[1]] = 'apple'
    
    useEffect(() => {
        const snakeMoveHandler = (e: KeyboardEvent) => {
            const key = e.key

            if (['ц', 'w'].includes(key.toLowerCase())) snakeApi.vectorUp()
            else if (['в', 'd'].includes(key.toLowerCase())) snakeApi.vectorRight()
            else if (['ы', 's'].includes(key.toLowerCase())) snakeApi.vectorDown()
            else if (['ф', 'a'].includes(key.toLowerCase())) snakeApi.vectorLeft()
            else if (['л', 'k'].includes(key.toLowerCase())) snakeApi.eat()

            // window.removeEventListener('keydown', snakeMoveHandler)
        }
        window.addEventListener('keydown', snakeMoveHandler)

        const snakeSpeed = setInterval(() => {
            snakeApi.move(size)
        }, 130)
        return () => clearInterval(snakeSpeed)
    }, [size])

    return (
        <>
            {cells.map((row, i) => <div key={i} style={{ height: `${100 / size}%` }} className={css.row}>{row.map((cellStyle, key) => <div key={key} style={{ width: `${100 / size}%` }} className={css[cellStyle]}></div>)}</div>)}
        </>
    )
}

export default Snake