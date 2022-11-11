import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [responseData, setResponseData] = useState(null);
    useEffect( () => {
        if (isSubmitted) {
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
                .then(response=>{setResponseData(response.data)})
        }
    }, [isSubmitted]);

    const FetchPokes = () => {
        setIsSubmitted(isSubmitted => !isSubmitted);
    };

    return (
        <div>
            <button onClick={FetchPokes}>Fetch Pokemon</button>
            {responseData ? responseData.results.map((poke, index) => {
                    return(<p key={index}>{poke.name}</p>)
            }):null}
        </div>
    );

}

export default Pokemon;