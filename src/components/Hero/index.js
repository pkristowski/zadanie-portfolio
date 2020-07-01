import React from 'react';

export default function Hero({ images, title, subtitle, button }) {
    return (
        <div className={s.root}>
            <div className={s.bg} style={{ backgroundImage: `url(${images[0]})` }} />
            <div className="d-flex align-items-center h-100">
                <div className={s.text}>
                    <h2>{title}</h2>
                    <div className="mt-4 mb4">{subtitle}</div>
                    <button className="btn btn-primary btn-lg">{button}</button>
                </div>
            </div>
        </div>
    )
}

export default Hero