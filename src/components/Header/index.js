import React from 'react';

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
                    <a href={item.link}>{item.title}</a>
                </li>
            ))}
        </ul>
    )
}