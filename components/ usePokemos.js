import { useEffect, useState } from "react";



const usePokemons = () => {
    const [pokeInfo, setPokeInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async (url = 'https://pokeapi.co/api/v2/pokemon?limit=12') => {
        try {
            const response = await fetch(url)
            const jsonresponse = await response.json();
            return jsonresponse;
        } catch (error) {
            console.log(error)
        }


    }

    const consume = async () => {
        const data = await getData();
        const pokemons = [];

        data.results.map(async da => {
            const datos = await getData(da.url)
            pokemons.push(
                {
                    id: datos.id,
                    name: datos.name,
                    img: datos.sprites.front_default
                }
            )
        })

        setPokeInfo(pokemons);

    }

    useEffect(() => {


        consume();

        setTimeout(() => {
            setLoading(!loading)
        }, "6000");
    }, [])



    return {
        pokeInfo,
        loading,
        consume
    }
}

export default usePokemons