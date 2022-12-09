import React from 'react'
import Clock from './Clock'
import { useState,useEffect } from 'react';

export default function Dashboard() {
    const [timerDays, setTimeDays] = useState();
    const [timerHours, setTimeHours] = useState();
    const [timerMinutes, setTimeMinutes] = useState();
    const [timerSeconds, setTimeSeconds] = useState();

    let interval;

    const startTimer = () => {
        const countDownDate = new Date("December 25, 2022").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor(distance / (24 * 60 * 60 * 1000) / (1000 * 60 * 60));
            const minutes = Math.floor(distance / (60 * 60 * 1000) / (1000 * 60));
            const seconds = Math.floor(distance / (60 * 1000) / (1000));

            if (distance < 0) {
                // Stop Timer

                clearInterval(interval.current);
            } else {
                //update timer

                setTimeDays(days);
                setTimeHours(hours);
                setTimeMinutes(minutes);
                setTimeSeconds(seconds);
            }
        })
    }

useEffect(() => {
    startTimer();
})

    return (
        <div className='countdownTimer'>]
        <Clock timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds} />
        </div>
    )
}
