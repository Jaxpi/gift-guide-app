import React from 'react'
import Clock from './Clock'
import { useState } from 'react';

export default function Dashboard() {
    const [timerDays, setTimeDays] = useState();
    const [timerHours, setTimeHours] = useState();
    const [timerMinutes, setTimeMinutes] = useState();
    const [timerSeconds, setTimeSeconds] = useState();

    return (
        <Clock timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds} />
    )
}
