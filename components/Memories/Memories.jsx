import React from 'react';
import s from './Memories.module.scss'

const Memories = () => {
    return (
        <>
            <div className={s.container}>
                <div className={s.mem}>
                    <div className={s.left}>
                        <h1>
                            мы строим дома, <br /> в которых <br /> поселятся ваши <br />счастливые <br />воспоминания
                        </h1>
                    </div>
                    <div className={s.right}>
                        <p>
                            Мы помогаем людям обретать <br /> счастье, создавать семьи, <br />
                            предоставляем возможность <br /> строить и улучшать свою жизнь, <br />
                            сохранять семейные ценности. Мы <br /> строим дома, которые <br />
                            обеспечивают атмосферу счастья, <br /> уюта и комфорта
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Memories;