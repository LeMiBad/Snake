import { useStore } from "effector-react"
import { useState } from "react"
import { $snakeParams } from "../../store/snakeModel"
import { saveTimer } from "../../store/timerModel"

const Timer = () => {
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)


    const {isLoose} = useStore($snakeParams)

    const tick = setTimeout(() => {
        setSeconds((seconds === 59)? 0 : seconds+1)
    }, 1000)

    setTimeout(() => {
        setMinutes(minutes+1)
    }, 61000)

    const parseTime = () => {
        return `${(minutes < 10)? `0${minutes}` : minutes} : ${(seconds < 10)? `0${seconds}` : seconds}`
    }

    if(isLoose) {
        clearTimeout(tick)
        saveTimer(parseTime())
    }


    return (
        <div>
            {parseTime()}
        </div>
    )
}

export default Timer