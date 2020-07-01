import React from 'react';
import Service from './components/Service';
import s from './style.module.css';

export default function OurServices({ title, service }) {
    return (
        <div className={`container ${s.root}`}>
            <h3 className="mb-5">{title}</h3>
            <div classname="d-flex">
                {service.map((singleService) => (<Service {...singleService} />))}
            </div>
        </div>
    )
}