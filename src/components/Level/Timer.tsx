import { useEffect, useState } from "react"

const Timer = () => {
    const [sec, setSec] = useState(0)
    const [min, setMin] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setSec(sec+1)
        }, 1000)
        clearInterval(timer)
    })

    const parseTime = () => {
        if(sec === 60) setMin(min+1)

        if(String(sec).length === 2) return <>{`${min}: ${sec}`}</>
        else return <>{`${min}: 0${sec}`}</>
    }

    return (
        <div>
            {parseTime()}
        </div>
    )
}

export default Timer