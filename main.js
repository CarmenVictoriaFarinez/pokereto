const pokemonContainer = document.querySelector(".pokemon-container");
const spinner = document.querySelector("#spinner");


function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => res.json())
      .then((data) => {
          //console.log(data);
          createPokemon(data);
      });   
  }

  function fetchPokemons(number){
      for (let i = 1; i <= number; i++){
        fetchPokemon(i);
      }
  }

function createPokemon(pokemon) {
    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;

    spriteContainer.appendChild(sprite);

    const number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3,0)}`;

     const name = document.createElement('p');
     name.classList.add('name');
     name.textContent = pokemon.name;

     const buttonDetail = document.createElement('button');
     buttonDetail.classList.add('btn');
     buttonDetail.textContent = 'Detail';
     buttonDetail.addEventListener('click', detailPokemon);

     card.appendChild(spriteContainer);
     card.appendChild(number);
     card.appendChild(name);
     card.appendChild(buttonDetail);

     pokemonContainer.appendChild(card);

}

function detailPokemon(id) {
        data.id === id;
        console.log(data.id);
        console.log(id);
    }


fetchPokemons(21);