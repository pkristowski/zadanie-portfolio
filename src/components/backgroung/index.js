import React from 'react'
//import img from 'C:\Users\adm\Documents\JavaScript\zadanie-portfolio\zadanie-portfolio\src\images\1.jpg'

export default function Background(props){
    return (
        <div>
            <div>
                {props.children[0]}
            </div>
            <div>
                {props.children[1]}
            </div>
        </div>
    )
};