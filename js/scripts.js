var pokemonRepository = (function () {
    var pokemonList = [
        {
            name: 'Eevee',
            number: 133,
            height: 0.3,
            weight: 6.5,
            types: ['Normal'],
        },
        {
            name: 'Vaporeon',
            number: 134,
            height: 1.0,
            weight: 29,
            types: ['Water']
        },
        {
            name: 'Jolteon',
            number: 135,
            height: 0.8,
            weight: 24.5,
            types: ['Electric'],
        },
        {
            name: 'Flareon',
            number: 136,
            height: 0.9,
            weight: 25,
            types: ['Fire'],
        },
        { 
            name: 'Espeon',
            number: 196,
            height: 0.9,
            weight: 26.5,
            types: ['Psychic'],
        },
        {
            name: 'Umbreon',
            number: 197,
            height: 1.0,
            weight: 27,
            types: ['Dark'],
        },
        {
            name: 'Leafeon',
            number: 470,
            height: 1.0,
            weight: 25.5,
            types: ['Grass'],
        },
        {
            name: 'Glaceon',
            number: 471,
            height: 0.8,
            weight: 25.9,
            types: ['Ice'],
        },
        {
            name: 'Sylveon',
            number: 700,
            height: 1.0,
            weight: 23.5,
            types: ['Fairy'],
        }
    ];
  
    function add(pokemon) {
      pokemonList.push(pokemon);
    }
  
    function getAll() {
      return pokemonList;
    }
    
    return {
      add: add,
      getAll: getAll
    };
  })();

function displayPokemonData(data) {
    document.write('<p>' + data.name + ' is ' + data.types + ' type, and is ' + data.height + ' meters in height. ' + '</p>');
    if (data.height < 0.5) document.write('(Wow, ' + data.name + ' is really small!)');
}
pokemonRepository.getAll().forEach(displayPokemonData);