export const getPokemones = async (limit, offset) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit};`
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
    } catch (err) {}
}