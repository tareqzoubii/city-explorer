import React from "react";
import axios from "axios";

class MoviesApi extends React.Component {
    render(){
        return(
            <div>
                <form>
                    <input type="text" placeholder="Search for the movie using city name" />
                </form>
            </div>
        )
    }
}
export default MoviesApi;