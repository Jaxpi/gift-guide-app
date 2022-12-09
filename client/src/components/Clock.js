import React, { Fragment } from 'react'

const Clock = ({timerDays, timerHours, timerMinutes, timerSeconds}) => {
  return <Fragment>
    <section className="time-container">
        <section className='timer'>
            <div className='clock'>
                <section>
                    <p>{timerDays}</p>
                    <small>Days</small>
                </section>
                <section>
                    <p>{timerHours}</p>
                    <small>Hours</small>
                </section>
                <section>
                    <p>{timerMinutes}</p>
                    <small>Minutes</small>
                </section>
                <section>
                    <p>{timerSeconds}</p>
                    <small>Seconds</small>
                </section>
            </div>
        </section>
    </section>
  </Fragment>
}

Clock.defaultProps={
timerDays:10,
timerHours:10,
timerMinutes:10,
timerSeconds:10
};

export default Clock;