function createContainer() {
    const container = document.createElement('div');
    container.className='gnlContainer';
    document.body.appendChild(container);

    const list = document.createElement('ol');
    list.id = 'pokedex';
    document.querySelector('.gnlContainer').appendChild(list);
}

const getDataPokemon = async() => {
    const result = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
    const listPokemon = await result.json();
    console.log('Accediendo',listPokemon);

    printListPokemon(listPokemon)
}

const printListPokemon = (pokemons) => {
    pokemons.results.forEach((pokemon, index) => {
        console.log(pokemon.name);
        const li = document.createElement('li');
        li.className = 'pokeCard';

        const p = document.createElement('p')
        p.textContent = `${pokemon.name}`;
        li.appendChild(p);
    
        const img = document.createElement('img');
        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`;
        img.alt = pokemon.name;
        li.appendChild(img);
    
        document.querySelector('#pokedex').appendChild(li);

    // callPokemon (pokemon.name);
    
    });
   
}

// const callPokemon = async (name) => {
    

// }


const init = async() => {
    createContainer();
    getDataPokemon ();
    
    
}

window.onload = function() {
    init();

}