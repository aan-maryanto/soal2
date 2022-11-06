import React, { Component } from "react";
import NoImage from "../assets/no-image.png"


class Movie extends Component {

    state = {
        url : this.props.film,
        isLoading: false,
        data: null
    }

    getDetail = () => {
        this.setState({isLoading:true})
        const url = this.state.url
        fetch(url)
            .then(res => {
                if(res.status !== 200) {
                    throw new Error("Unsuccessfull get data from swapi.dev")
                }
                return res.json()
            })
            .then(json => {
                console.log(json)
                this.setState({data:json})
            })
            .catch(err => console.error(err))
            .finally(() => {
                this.setState({isLoading:false})
            })
    }

    render() {
        return(
            <div className="col-md-3 col-sm-12">
                <div style={{display: 'inline-grid'}}>
                    <img src={NoImage} width={200}/>
                    <button onClick={this.getDetail}>show detail</button>
                </div>
                <hr/>
                {
                    this.state.isLoading ? 
                        
                    <div>
                        <div className="loadingio-spinner-ripple-334gm0qn6eo">
                            <div className="ldio-al56c6iee5l">
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    :
                    <div style={{display: "none"}}></div>
                }
                {
                    this.state.data != null ?
                    <div>
                        <h3>{this.state.data.title}</h3>
                        <p> {this.state.data.opening_crawl}</p>
                        <p> director : <span>{this.state.data.director}</span></p>
                        <p> producer : <span>{this.state.data.producer}</span></p>
                        <p> release date : <span>{this.state.data.release_date}</span></p>
                    </div>:<div></div> 
                }
            </div>
        )
    }
}

export default Movie