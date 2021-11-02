import React, { useEffect } from 'react'
import { useParams } from 'react-router'

const User = () => {
    
    const {id} = useParams();
    console.log(id);

    const [pueblo, setPueblo] = React.useState([]);

    React.useEffect(()=> {
        const obtenerDatos = async() => {
            const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`);
            const users = await data.json();
            setPueblo(users);
        }

        obtenerDatos()
    }, [id])



    return (
        <div>
            <h3>{pueblo.name}</h3>
            <p>{pueblo.civilization_bonus}</p>
        </div>
    )
}

export default User
