import React from "react"
import Movie from "./Movie"

const Movies = ({movies}) => {
    const {films} = movies

    movieDetail = () => film => {
        console.log("film", film)
        // fetch(film)
        //     .then(res => {
        //         if (res.status !== 200) {
        //             throw new Error("Unsuccessfull request to swapi.dev")
        //         }
        //         return res.json()
        //     }).then(json => console.log(json))
        //     .catch(err => console.log(err))
    }

    return (
        <div className="row">
            {       
                    films.map((film, i) => {
                        return(
                            <Movie key={i} film={film}/>
                    )})
                }
        </div>
    )
}

export default Movies