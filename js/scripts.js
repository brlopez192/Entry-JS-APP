// Declaration of pokemon array with each object
let pokemonRepository = (function() {
    let pokemonList = [];
    let apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

        function add(pokemon) {
            if (
                typeof pokemon === "object" &&
                "name" in pokemon &&
                "detailsURL" in pokemon
            ) {
                pokemonList.push(pokemon);
            } else {
                console.log("Pokemon is not correct");
            }
        }

        function getAll() {
            return pokemonList;
        }

        function addListItem(pokemon) {
            let pokemonList = document.querySelector('.pokemon-list');
            let listPokemon = document.createElement("li");
            let button = document.createElement("button");
            button.innerText = pokemon.name;
            button.classList.add("button-class");
            button.addEventListener('click', function () {
                showDetails(pokemon);
            });
            listPokemon.appendChild(button);
            pokemonList.appendChild(listPokemon);
        }
        
        function showModal(title, text, img) {
            let modalContainer = document.querySelector('#modal-container');
            modalContainer.innerText = '';
            let modal = document.createElement('div');
            modal.classList.add('modal');
            let closeButtonElement = document.createElement('button');

            closeButtonElement.classList.add('modal-close');
            closeButtonElement.innerText = 'Close';
            closeButtonElement.addEventListener('click', hideModal);
      
            let pokemonName = document.createElement('h1');
            pokemonName.innerText = title;
            let pokemonHeight = document.createElement('p');
            pokemonHeight.innerText = text;
            let pokemonImage = document.createElement('img');

            pokemonImage.setAttribute('src', img);
            pokemonImage.setAttribute('width', '100%');
            pokemonImage.setAttribute('height', '100%');
      
            modal.appendChild(closeButtonElement);
            modal.appendChild(pokemonName);
            modal.appendChild(pokemonHeight);
            modal.appendChild(pokemonImage);
            modalContainer.appendChild(modal);
      
            modalContainer.classList.add('is-visible');
      
            modalContainer.addEventListener('click', (e) => {
              let target = e.target;
              if (target === modalContainer) {
                hideModal();
              }
            });
          }
          function hideModal() {
            let modalContainer = document.querySelector('#modal-container');
            modalContainer.classList.remove('is-visible');
          }

          function showDetails(pokemon) {
            loadDetails(pokemon).then(function () {
              showModal(
                pokemon.name,
                "Height: " + pokemon.height,
                pokemon.imageURL
              );
            });
          }

        function loadList() {
            return fetch(apiURL).then(function(response) {
                return response.json();
            }).then(function(json) {
                json.results.forEach(function (item) {
                    let pokemon = {
                        name: item.name,
                        detailsURL: item.url
                    };
                    add(pokemon);
                });
            }).catch(function (e) {
                console.error(e);
            })
        }
        function loadDetails(item) {
            let url = item.detailsURL;
            return fetch(url).then(function (response) {
                return response.json();
            }).then(function (details) {
                item.imageURL = details.sprites.front_default;
                item.height = details.height;
                item.types = details.types;
            }).catch(function (e) {
                console.error(e)
            });
        }
        return {
            add: add,
            getAll: getAll,
            addListItem: addListItem,
            loadList: loadList,
            loadDetails: loadDetails,
            showDetails: showDetails
        };
})();

// For loop to print out the details of each pokemon
// for (let i = 0; i < pokemonList.length; i++) {
//     document.write("<p>" + `${pokemonList[i].name}: ${pokemonList[i].Height}` + "</p>")
// }

// ForEach method to print out details of each pokemon
pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});

// For loop to print out which pokemon is the biggest
// for (let i = 0; i < pokemonRepository.getAll().length; i++) {
//     if (pokemonRepository.getAll()[i].Height > 10) {
//         document.write("<p>" + `${pokemonRepository.getAll()[i].name} is the Biggest Pokemon` + "</p>")
//     }
// }
