import React from 'react';

export default function Project({ title, category, background }) {
    return (
        <div className={s.root}>
            <img src={background} />
            <div className={s.onHover}>
                <h4>{title}</h4>
                <div>{category}</div>
            </div>
        </div>

    )
}