const pokeUrl = "https://pokeapi.co/api/v2/pokemon";

export async function fetchByName(name) {
  try {
    const response = await fetch(`${pokeUrl}/${name}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchRandomPokemon() {
  try {
    const randomIndex = Math.floor(Math.random() * 1025) + 1;
    const response = await fetch(`${pokeUrl}/${randomIndex}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}
