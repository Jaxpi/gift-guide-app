import React from 'react'

const CountDownTimer = () => {
    const hoursMinSecs = {hours:1, minutes: 20, seconds: 40}

    var differenceInTime = new Date(2022, 11, 25, 0, 0, 0, 0).getTime()- Date.now()
    function dhm (ms) {
        const days = Math.floor(ms / (24*60*60*1000));
        const daysms = ms % (24*60*60*1000);
        const hours = Math.floor(daysms / (60*60*1000));
        const hoursms = ms % (60*60*1000);
        const minutes = Math.floor(hoursms / (60*1000));
        const minutesms = ms % (60*1000);
        const seconds = Math.floor(minutesms / 1000);
        return `${days} d, ${hours} h, ${minutes} m, and ${seconds} s till Christmas!`
    }

    const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);

    const tick = () => {

        if (hrs === 0 && mins === 0 && secs === 0)
            reset()
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };


    const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    return (
        <div id="timer">
            <p>{dhm(differenceInTime)}</p>
        </div>
    );
}

export default CountDownTimer;