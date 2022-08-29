import React from "react";
import axios from "axios";
import Error from './Error';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cityLocation: "",
            latitude: "",
            longitude: "",
            mapFlag : false,
            error : false
        }
    }

    findCity = async (event) => {
        //alert('Welcome');
        event.preventDefault();
        const city = event.target.city.value;
        //console.log(city);
        //https://us1.locationiq.com/v1/search?key=pk.3fc653aec746a7cd84c80893136187a7&q=amman&format=json
        // key: pk.3fc653aec746a7cd84c80893136187a7
        const key = 'pk.3fc653aec746a7cd84c80893136187a7';
        const URL = `https://us1.locationiq.com/v1/search?key=${key}&q=${city}&format=json`
        

    try{
        let resResult = await axios.get(URL);
        console.log(resResult);
        
        this.setState({
            cityLocation: resResult.data[0].display_name,
                latitude: resResult.data[0].lat,
                longitude: resResult.data[0].lon,
                mapFlag : true,
                error : false
        })
    }
    catch{
        this.setState({
            error : true
    })
}
    }
    closeAlert = () => {
        this.setState({
            // setShow : false
            error : false
           })
        }
    
    render(){
        return(
            <div style={{textAlign:"center", padding:"60px", backgroundColor:"grey"}}>
            <form onSubmit={this.findCity}>
                <input type='text' name='city' placeholder="Search for the city ..." style={{backgroundColor:"white", border:"3px solid grey", borderRadius:"10px ", marginRight: "8px"}}/>
                <button type='submit' style={{backgroundColor:"white", border:"3px solid grey", borderRadius:"10px "}}>Search</button>
        </form>
        <h3>City:🏙️ {this.state.cityLocation} 🏙️</h3>
        <h5>Latitude:⭕⭕ {this.state.latitude} ⭕⭕</h5>
        <h5>Longitude:➖➖ {this.state.longitude} ➖➖</h5>
        {this.state.mapFlag && <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.3fc653aec746a7cd84c80893136187a7&center=${this.state.latitude},${this.state.longitude}`} style={{backgroundColor:"white", border:"3px solid white", borderRadius:"70px "}}></img>}
        {this.state.error && <Error  error={this.closeAlert}/>}
        </div>
        )
    
}
}
export default Main;