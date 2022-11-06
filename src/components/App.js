import React, { Component } from "react";
import Movies from "./Movies";
import Profile from "./Profile";

class App extends Component {
    
    state = {
        isLoading: true,
        isError: false,
        messageError: null,
        data: null
    }

    componentDidMount() {
        fetch('https://swapi.dev/api/people/1/')
        .then(res => {
            if (res.status !== 200) {
                throw new Error("unsuccessfull request to swapi.dev")
            }
            return res.json()
        })
        .then(json => {
            this.setState({
                data: json, 
                isLoading: false
            })
        })
        .catch(error => this.setState({isError: true, messageError: error.message, isLoading: false}))
    }

    render() {

        if(this.state.isLoading) {
            return (
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
                    <div className="loadingio-spinner-ripple-334gm0qn6eo">
                        <div className="ldio-al56c6iee5l">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            )
        }
        if(!this.state.isLoading) {
            return(
                <div>
                   <Profile profile={this.state.data} />
                   <hr/>
                   <h2>Movies</h2>
                   <Movies movies={this.state.data}/>
                </div>
            )
        }
    }
}
export default App