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

    function addListItem(pokemon) {
        var createList = document.querySelector('.pokedex');
        var listItem = document.createElement('li');
        var button = document.createElement('button');
        button.innerText = (pokemon.name);
        button.classList.add('list-button');
        listItem.appendChild(button);
        createList.appendChild(listItem);
        button.addEventListener('click', function (event) {
            showDetails(pokemon);
        });
    }

    function showDetails(pokemon) {
        console.log(pokemon);
    }

    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem
    };
  })();

pokemonRepository.getAll().forEach(pokemonRepository.addListItem);