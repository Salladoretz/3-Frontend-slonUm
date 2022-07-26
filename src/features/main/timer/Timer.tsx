import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../../app/hooks'
import css from './Timer.module.scss'

const Timer = () => {

    const deadline = useAppSelector(state => state.data.deadline)

    const [diff, setDiff] = useState(+deadline - Date.now())
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const twoDigit = (digit: number) => { return digit.toString().padStart(2, '0') }

    useEffect(() => {
        let interval = setInterval(() => {
            if (diff > 1000) {
                setDiff(diff - 1000)
            }
        }, 1000)
        return () => clearInterval(interval)
    }, [diff])

    return (
        <div className={css.timer}>
            <div className={css.timer__digit}>
                <h2>{days >= 0 ? twoDigit(days) : '00'}</h2>
                <p>дней</p>
            </div>
            <p className={css.timer__colon}>:</p>
            <div className={css.timer__digit}>
                <h2>{hours >= 0 ? twoDigit(hours) : '00'}</h2>
                <p>часов</p>
                <p className={css.timer__digit_grey}>по МСК</p>
            </div>
            <p className={css.timer__colon}>:</p>
            <div className={css.timer__digit}>
                <h2>{minutes >= 0 ? twoDigit(minutes) : '00'}</h2>
                <p>минут</p>
            </div>
        </div>

    )
}

export default Timer