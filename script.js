const searchButton = document.querySelector('.submit-button');
const randomButton = document.querySelector('.random-button');
const resetButton = document.querySelector('.reset-button');
const searchField = document.querySelector('.search-field');
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
  ice: '#98d8d8',
  ghost: '#705898',
  dark: '#705848',
  steel: '#b8b8d0'
};
const main_types = Object.keys(colors);

searchButton.addEventListener("click", function(event){
  const input = searchField.value;
  event.preventDefault();
  return fetchPokemons(input)
});




const pokemon_number = 12;
const pokemonData = {}
const fetchPokemons = (id) => {
  const pokemonUrl =`https://pokeapi.co/api/v2/pokemon/${id}`;
  const pokemonLocationUrl = `https://pokeapi.co/api/v2/pokemon/${id}/encounters`
  fetch(pokemonUrl)
  .then(res => {
    return res.json();
  })
  .then(data1 => {
    // console.log(data1)
    const pokemon = {
      name: data1.name,
      id: data1.id,
      image: data1.sprites.front_default,
      type: data1.types.map((type) => type.type.name).join(', '),
    };
    // console.log(pokemon)
    return fetch(pokemonLocationUrl)
    .then(res => {
        return res.json();
      })
      .then(data2 => {
        // console.log(data2)
        pokemon.spawns = data2.map((location) => location.location_area.name).join(', ');
        console.log(pokemon)
        populate(pokemon)
        return pokemon
      })
    })
  };
  const populate = (pokemonData) => {
    const pokemonPictureCard = document.querySelector('.page-title');
    pokemonPictureCard.src = pokemonData.image
  };
  // colours
  //
  // const capitalize = (string) => { return string[0].toUpperCase() + string.slice(1) };
