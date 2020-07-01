import React from 'react';

export default function Service({ title, subtitle, icon }) {
    return (
        <div className={s.root}>
            <div className={s.imageWrapper}>
                <img src={icon} />
            </div>
            <h4 className="mb4 mt-4">{title}</h4>
            <div>
                {subtitle}
            </div>
        </div >
    )
}