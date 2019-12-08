import React, { Component } from "react";

class Home extends Component {
    render(){
        const handleView = () => {
            window.location = "/view"
        };
        const handleAdd = () => {
            window.location = "/add"
        }
        return(
            <>
                <p>Recipe Box</p>
                <button onClick={handleView}>View Recipes</button>
                <button onClick={handleAdd}>Add New Recipe</button>
            </>
        )
    }
}

export default Home;