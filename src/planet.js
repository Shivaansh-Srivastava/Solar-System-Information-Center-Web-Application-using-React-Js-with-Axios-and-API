import React from "react";

class Planet extends React.Component{
    render(){
        if(this.props.info.isPlanet === true){
            return(
                <div className="box">
                    <h2>Details:</h2>
                    <hr/>
                    <h3>Name: {this.props.info.englishName}</h3>
                    <h3>Number of moons: {this.props.moons.length}</h3>
                    <h3>Axial Tilt: {this.props.info.axialTilt}</h3>
                    <h3>Average Temperature found: {this.props.info.avgTemp}</h3>
                    <h3>Gravity: {this.props.info.gravity}</h3>
                    <h3>Escape: {this.props.info.escape}</h3>
                    <h3>Mass Value: {this.props.mass.massValue}</h3>
                    <h3>Mass Exponent: {this.props.mass.massExponent}</h3>
                 </div>
            )       
        }
        else{
            return(
                <div className="box">
                    <h2>Details:</h2>
                    <hr/>
                    <h3>Name: {this.props.info.englishName}</h3>
                    <h3>Axial Tilt: {this.props.info.axialTilt}</h3>
                    <h3>Average Temperature found: {this.props.info.avgTemp}</h3>
                    <h3>Gravity: {this.props.info.gravity}</h3>
                    <h3>Escape: {this.props.info.escape}</h3>
                    <h3>Mass Value: {this.props.mass.massValue}</h3>
                    <h3>Mass Exponent: {this.props.mass.massExponent}</h3>
                 </div>
            ) 
        }

    }
}

export default Planet