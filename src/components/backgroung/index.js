import React from 'react';
import { homepage } from '../../homepage.const';

export default function Background(){
    return (
        <img style={{height: "100%", width: "100%", position: "fixed", top: "0%", left: "0%", marginTop: "0px", marginLeft: "0px"}} src={homepage.hero.images[1]}/>
    )
};
