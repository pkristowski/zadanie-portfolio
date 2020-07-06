import React from 'react';
import s from './style.module.css';

export default function Footer({ title, subtitle, phoneIcon, phone, envelopeIcon, email }) {
    return (
        <strong><div>Footer</div></strong>
        // <div className="container">
        //     <h3>{title}</h3>
        //     <div>{subtitle}</div>
        //     <div className={s.contactData}>
        //         <img src={phoneIcon} />{phone}
        //     </div>
        //     <div className={s.contactDetails}>
        //         <img src={envelopeIcon} />{email}
        //     </div>
        // </div>
        // <div className={s.footer}>
        //     <div className="container">
        //         2020
        //     </div>
        // </div>
    );
}