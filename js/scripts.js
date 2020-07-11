var pokemonRepository = (function () {

    var modalContainer = document.querySelector('#modal-container');

    var pokemonList = [];

    var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
  
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
//Modal will be called up instead of console.log here
    function showDetails(item) {
        loadDetails(item).then(function () {
            showModal();
        });
    }

    function loadList() {
            return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                var pokemon = {
                    name: item.name,
                    detailsUrl: item.url
            };
            add(pokemon);
          });
        }).catch(function (e) {
            console.error(e);
        })
    }

    function loadDetails(item) {
        var url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.species = details.species;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }

    //Modal below, this is just the example solution as a last resort effort to make anything happen here before trying to make it show info from the API.
    function showModal(title, text) {
        modalContainer.innerHTML = '';
        
        var modal = document.createElement('div');
        modal.classList.add('modal');
        
        var closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);
        
        var titleElement = document.createElement('h1');
        titleElement.innerText = title;
        
        var contentElement = document.createElement('p');
        contentElement.innerText = text;
        
        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        modalContainer.appendChild(modal);
        
        modalContainer.classList.add('is-visible');
      }
      
      function hideModal() {
        modalContainer.classList.remove('is-visible');
      }
      
      document.querySelector('#show-modal').addEventListener('click', () => {
        showModal('Modal title', 'This is the modal content!');
      });
      
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
          hideModal();  
        }
      });
      
      modalContainer.addEventListener('click', (e) => {
        var target = e.target;
        if (target === modalContainer) {
          hideModal();
        }
      });

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList
    };
})();

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });
});

pokemonRepository.getAll().forEach(pokemonRepository.addListItem);