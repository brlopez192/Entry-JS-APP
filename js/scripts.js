// Declaration of pokemon array with each object
let pokemonRepository = (function() {
    let pokemonList = [
        {name: 'Bulbasaur', 
            Height: 7, 
            type: ['Grass', 'Monster']},
        {name: 'Charizard', 
            Height: 17, 
            type: ['Dragon', 'Monster']},
        {name: 'Squirtle', 
            Height: 5, 
            type: ['Water 1', 'Monster']}
        ];
        return {
            add: function() {
                pokemonList.push(pokemon);
            },
            getAll: function() {
                return pokemonList;
            }
        };
})();

// For loop to print out the details of each pokemon
// for (let i = 0; i < pokemonList.length; i++) {
//     document.write("<p>" + `${pokemonList[i].name}: ${pokemonList[i].Height}` + "</p>")
// }

// ForEach method to print out details of each pokemon
pokemonRepository.getAll().forEach(function(pokemon) {
    document.write("<p>" + `${pokemon.name}: ${pokemon.Height}`);
});

// For loop to print out which pokemon is the biggest
for (let i = 0; i < pokemonRepository.getAll().length; i++) {
    if (pokemonRepository.getAll()[i].Height > 10) {
        document.write("<p>" + `${pokemonRepository.getAll()[i].name} is the Biggest Pokemon` + "</p>")
    }
}
