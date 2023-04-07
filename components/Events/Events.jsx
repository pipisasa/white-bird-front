import React from 'react';
import UnderSlider from '../UnderSlider/UnderSlider';
import s from './Events.module.scss'

const Events = () => {
    return (
        <>
            <div id='events' className={s.events}>
                <h1>
                    НОВОСТИ
                    <hr />
                </h1>
            </div>
            <UnderSlider />
        </>
    );
};

export default Events;