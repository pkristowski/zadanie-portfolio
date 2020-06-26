import React from 'react';
import { homepage } from '../../homepage.const';

export default class TopMenu extends React.Component {

    handleClick() {
        console.log("klik");
    }

        render() {
    return (
        <div>
            <button onClick={this.handleClick.bind(this)} style={{ height: "65px", width: "140px", position: "fixed", top: "80%", left: "47%", marginTop: "-100px" }}>Click me</button>
        </div>
    )
}
}