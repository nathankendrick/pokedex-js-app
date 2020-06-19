var pokemonList = [
{
    pokemonName: 'Eevee',
    pokedexNumber: 133,
    pokemonHeight: 0.3,
    pokemonWeight: 6.5,
    pokemonTypes: ['Normal'],
},
{
    pokemonName: 'Vaporeon',
    pokedexNumber: 134,
    pokemonHeight: 1.0,
    pokemonWeight: 29,
    pokemonTypes: ['Water']
},
{
    pokemonName: 'Jolteon',
    pokedexNumber: 135,
    pokemonHeight: 0.8,
    pokemonWeight: 24.5,
    pokemonTypes: ['Electric'],
},
{
    pokemonName: 'Flareon',
    pokedexNumber: 136,
    pokemonHeight: 0.9,
    pokemonWeight: 25,
    pokemonTypes: ['Fire'],
},
{ 
    pokemonName: 'Espeon',
    pokedexNumber: 196,
    pokemonHeight: 0.9,
    pokemonWeight: 26.5,
    pokemonTypes: ['Psychic'],
},
{
    pokemonName: 'Umbreon',
    pokedexNumber: 197,
    pokemonHeight: 1.0,
    pokemonWeight: 27,
    pokemonTypes: ['Dark'],
},
{
    pokemonName: 'Leafeon',
    pokedexNumber: 470,
    pokemonHeight: 1.0,
    pokemonWeight: 25.5,
    pokemonTypes: ['Grass'],
},
{
    pokemonName: 'Glaceon',
    pokedexNumber: 471,
    pokemonHeight: 0.8,
    pokemonWeight: 25.9,
    pokemonTypes: ['Ice'],
},
{
    pokemonName: 'Sylveon',
    pokedexNumber: 700,
    pokemonHeight: 1.0,
    pokemonWeight: 23.5,
    pokemonTypes: ['Fairy'],
}
]

function displayPokemonData(data) {
    document.write('<p>' + data.pokemonName + ' is ' + data.pokemonTypes + ' type, and is ' + data.pokemonHeight + ' meters in height. ' + '</p>');
    if (data.pokemonHeight < 0.5) document.write('(Wow, ' + data.pokemonName + ' is really small!)');
}
pokemonList.forEach(displayPokemonData);