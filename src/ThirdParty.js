import React from "react";
import axios from "axios";

class ThirdParty extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            weatherArr : [],
            movieArr : []
        }
    }

    getMovie = async (event) => {
        event.preventDefault();
        const movieQuery = event.target.name.value;
        const url = `http://localhost:3456/getMovie?movieQuery=${movieQuery}`;
        //const servResponce2 = await axios.get(url);
        //console.log(servResponce2.data);

        axios
        .get(url)
        .then(servResponce2 => {
            this.setState({
                movieArr : servResponce2.data
            })
        })
        .catch(error2 => {
            console.log(error2)
        })
    }


    getWeather = async (event) => {
        event.preventDefault();
        const searchQuery = event.target.name.value;
        const URL = `http://localhost:3456/getWeather?searchQuery=${searchQuery}`;
        //const servResponce = await axios.get(URL);
        //console.log(servResponce.data);
        // this.setState({
        //     weatherArr : servResponce.data
        // })

        axios
        .get(URL)
        .then(servResponce => {
            this.setState({
                weatherArr : servResponce.data
            })
        })
        .catch(error => {
            console.log(error)
        })
      

    }


    render(){
        return(
            <div style={{textAlign:"center", padding:"20px", backgroundColor:"#e0ffff"}}>
                <form onSubmit={this.getWeather}>
                    <input type='text' name='anyName' placeholder="Search Here !" style={{backgroundColor:"white", border:"3px solid black", borderRadius:"10px ", marginRight: "8px"}}/>
                    <button type="submit" style={{backgroundColor:"white", border:"3px solid black", borderRadius:"10px "}}> Search </button>
                </form>

                {this.state.weatherArr.map((val, x) =>{
                    return(
                        <div>
                            <h2>Day: {x+1} </h2>
                        <h3>Description: {val.description}</h3>
                        <h3>Date: {val.datetime}</h3>
                        </div>
                    )
                })}
                
            </div>
        )
    }
}
export default ThirdParty;