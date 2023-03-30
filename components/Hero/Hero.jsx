import React from 'react';
import s from './Hero.module.scss'

const Hero = () => {
    return (
        <>
            <div className={s.hero}>
                <img src="/flowers.jpg" alt="" />
                <div className={s.hero_content}>
                    <div className={s.content}>
                        <p>Жилой дом</p>
                        <span>
                            Madison
                        </span>
                        <p>Дом перстиж</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;