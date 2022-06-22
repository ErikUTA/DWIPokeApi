export const getPokemones = async (limit=10, offset=0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset};`
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch(err) {}
}

export const getPokemonesData = async (url) => {
    try {
        // let url = `https://pokeapi.co/api/v2/pokemon/${pokemon};`
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {

    }
}