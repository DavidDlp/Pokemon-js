function createContainer() {
    const container = document.createElement('div');
    container.className='gnlContainer';
    document.body.appendChild(container);

    const list = document.createElement('ol');
    list.className = 'pokedex';
    document.querySelector('.gnlContainer').appendChild(list);
}

const getDataPokemon = async() => {
    const result = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
    const listPokemon = await result.json();
    console.log('Accediendo',listPokemon);

    printListPokemon(listPokemon)
}

const printListPokemon = (pokemons) => {
    pokemons.results.forEach((pokemon, index) => {
        console.log(pokemon.name);
        const li = document.createElement('li');
        li.className = `pokedex__pokeCard`;

        const button = document.createElement('button')
        button.type = "button"
        button.className = 'button'
        button.textContent = `${pokemon.name}`;
        li.appendChild(button);
    
        const img = document.createElement('img');
        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`;
        img.alt = pokemon.name;
        li.appendChild(img);
    
        document.querySelector('.pokedex').appendChild(li);

    // callPokemon (pokemon.name);
    
    });
   
}

//  const callPokemon = async (name) => {
//     const call = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
//     const pokemon = await call.json();
//     // console.log('Buscando', pokemon);
//     let {stats} = pokemon;
//     // console.log('Buscando', stats);

//     for (let i = 0; i < stats.length; i++) {
//         console.log(stats[i]);
//         const containerStats = document.createElement('div')
//         containerStats.className= "stats"
//         const pStats = document.createElement("p");
//         pStats.textContent = `${stats[i].stat.name}: ${stats[i].base_stat}`;
//         containerStats.appendChild(pStats);
//         document.querySelector('.pokedex').appendChild(containerStats);
    
//     }

// }


const init = async() => {
    createContainer();
    getDataPokemon ();
    
    
}

window.onload = function() {
    init();

}