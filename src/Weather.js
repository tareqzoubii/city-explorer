import React from "react";
import axios from "axios";


class Weather extends React.Component {
constructor(props){
    super(props)
    this.state = {
        cityName: "",
        longitudeAPI: "",
        latitudeAPI: "",
        timezone: "",
        description: "",
        date: ""
    }
}
    getWeatherData = async (event)=>{
        event.preventDefault();
        //alert('HELOO!') for testing 
        const cityWeather = event.target.weather.value;
        const URL = `http://localhost:3131/getWatherData?name=${cityWeather}`;
        console.log(URL);
        try
        {
            let resResult2 = await axios.get(URL);
            this.setState({
                cityName: resResult2.data.city_name,
                longitudeAPI: resResult2.data.lon,
                latitudeAPI: resResult2.data.lat,
                timezone: resResult2.data.timezone,
                description: resResult2.data.data[0].weather.description,
                date: resResult2.data.data[0].datetime
                
            })
            console.log(resResult2.data, "TA");
        }
        catch 
        {
            //alert("HEL!")
        }
    }

    render(){
        return(
            <div style={{textAlign:"center", padding:"60px"}}>
                <form onSubmit={this.getWeatherData} >
            <input type='text' name='weather' placeholder="Search" style={{backgroundColor:"white", border:"3px solid grey", borderRadius:"10px "}}/>
            <button type='submit' style={{backgroundColor:"white", border:"3px solid grey", borderRadius:"10px "}}>Search</button>
        </form>

        <h3>City: {this.state.cityName}</h3>
        <h5>Longitude From API: {this.state.longitudeAPI}</h5>
        <h5>Latitude From API: {this.state.latitudeAPI}</h5>
        <h5>TimeZone: {this.state.timezone}</h5>
        <h5>Description: {this.state.description}</h5>
        <h5>Date: {this.state.date}</h5>
            </div>
        )
    }
    
}
export default Weather;