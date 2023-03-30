import React from 'react';
import CardsBlock from '../CardsBlock/CardsBlock';
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
            <CardsBlock/>
            <UnderSlider />
        </>
    );
};

export default Events;