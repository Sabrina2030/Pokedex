import { useEffect, useState } from 'react';

function useCard() {
    const Url = "https://pokeapi.co/api/v2/pokemon/";
    const [pokemon, setPokemon] = useState({});
    const [currentId , setCurrentId] = useState(1);
    const [weaknesses, setWeaknesses] = useState([]);
    const [stats, setStats] = useState([]);
    const [types, setTypes] = useState([]);

    const getPokemon = (id) => {
    setCurrentId(id);
    }

    useEffect(() => {
    fetch(Url + currentId)
        .then((response) => response.json())
        .then((data) => {
        setCurrentId(data.id);
        setPokemon(data);
        setStats(data.stats);
        setTypes(data.types);

        const typeUrls = data.types.map((type) => type.type.url);
        Promise.all( typeUrls.map( url => fetch(url).then( res => res.json() ) ) )
        .then( types => {
            const weaknesses1 = types.map( type => type.damage_relations.double_damage_from.map( item => item.name ) );
            const weaknesses2 = types.map( type => type.damage_relations.half_damage_from.map( item => item.name ) );
            const dobleDamage = weaknesses1.flat(); // flat() es un metodo de los arrays que convierte un array de arrays en un array plano // [ [1,2,3], [4,5,6] ] => [1,2,3,4,5,6]
            const halfDamage = weaknesses2.flat();
            const weaknesses = dobleDamage.filter( item => !halfDamage.includes(item) ); // filter() es un metodo de los arrays que filtra los elementos de un array segun una condicion. En este caso filtra los elementos que no estan en el array halfDamage
            // console.log(weaknesses);
            setWeaknesses(weaknesses);
        })
        });

    }, [currentId]);

    return [pokemon, weaknesses, currentId, getPokemon, stats, types];
}

export default useCard;