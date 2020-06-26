import React from 'react';


export default class TopMenu extends React.Component {


    render() {
        return (
            <div style={{ display: "flex" }}>
                <strong><text style={{ color: "white", height: "100px", width: "1000px", position: "fixed", top: "20%", left: "20%", marginTop: "-100px", marginLeft: "-200px" }}> To jest moja strona </text></strong>
                <div style={{ height: "100px", width: "1000px", position: "fixed", top: "20%", left: "90%", marginTop: "-100px", marginLeft: "-200px" }}>
                    <button style={{margin: "10px"}}>O mnie</button>
                    <button style={{margin: "10px"}}>Pogoda</button>
                    <button style={{margin: "10px"}}>Giełda</button>
                </div>
            </div>
        )
    }
}