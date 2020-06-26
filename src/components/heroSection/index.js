import React from 'react';


export default class HeroSection extends React.Component {

    

    render() {
        return (
            <div>
            <div style={{ height: "100px", width: "500px", position: "fixed", top: "50%", left: "50%", marginTop: "-100px", marginLeft: "-200px"}}>
                    <strong><text style={{fontSize: "40px"}}> Witam na mojej stronie! </text></strong>
                    <div style={{height: "5px", width: "200px", border: "1px solid red", backgroundColor: "red", display: "block", position: "fixed", top: "50%", left: "45%"}}></div>
                    <div style={{height: "200px", width: "500px", display: "block", position: "fixed", top: "55%", left: "35%"}}>This is some random description that is here just to fill some space</div>
            </div>
            </div>
        )
    }
}