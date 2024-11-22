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

for (let i = 0; i < pokemonList.length; i++) {
    document.write("<p>" + `${pokemonList[i].name}: ${pokemonList[i].Height}` + "</p>")
}

for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].Height > 10) {
        document.write("<p>" + `${pokemonList[i].name} is the Biggest Pokemon` + "</p>")
    }
}
