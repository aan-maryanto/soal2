import React from "react";
import ProfileImage from "../assets/profile.png"

const Profile = ({profile}) => {

    const {name,
        height,
        mass,
        hair_color,
        skin_color,
        eye_color,
        birth_year,
        gender } = profile

    return(
        <div className="row">
            <h2>{name}</h2>
            <img src={ProfileImage} className="profile"/>
            <hr/>
            <table width={'100%'} style={{textAlign:'center'}}>
                <thead>
                    <tr>
                        <th className="text-center">height</th>
                        <th className="text-center">Mass</th>
                        <th className="text-center">Hair Color</th>
                        <th className="text-center">Skin Color</th>
                        <th className="text-center">Eye Color</th>
                        <th className="text-center">Birth Year</th>
                        <th className="text-center">Gender</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{height}</td>
                        <td>{mass}</td>
                        <td>{hair_color}</td>
                        <td>{skin_color}</td>
                        <td>{eye_color}</td>
                        <td>{birth_year}</td>
                        <td>{gender}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default Profile