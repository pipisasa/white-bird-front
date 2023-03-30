import React from 'react';
import UnderSlider from '../UnderSlider/UnderSlider';
import s from './Events.module.scss'

const Events = () => {
    return (
        <>
            <div className={s.events}>
                <h1>
                    ПОСЛЕДНИЕ
                    <br />
                    МЕРОПРИЯТИЯ
                </h1>
            </div>
            <div className={s.slider}>
                <UnderSlider />
                <h1>ТУТ БУДЕТ ТЕКСТ</h1>
            </div>
        </>
    );
};

export default Events;