import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ logo, menu }) {
    return (
        <div>
            <div className="container">
                <div className="d-flex">
                    <div>{logo}</div>
                    <div>
                        <Navigation menu={menu}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Navigation({ menu }){
    return (
        <ul>
            {menu.map((item) => (
                <li>
                    <Link to={item.link}>
                    {item.title}
                    </Link>
                    {/* <a href={item.link}>{item.title}</a> */}
                </li>
            ))}
        </ul>
    )
}