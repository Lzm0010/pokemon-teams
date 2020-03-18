document.addEventListener("DOMContentLoaded", () => {
    const BASE_URL = "http://localhost:3000"
    const TRAINERS_URL = `${BASE_URL}/trainers`
    const POKEMONS_URL = `${BASE_URL}/pokemons`
    
    const main = document.querySelector('main');

    const addPokemon = (trainerId) => {
        console.log(trainerId)
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify({"trainer_id": trainerId})
        };
        fetch(POKEMONS_URL, configObj)
            .then(res => res.json())
            .then(json => {
                const ul = document.querySelector(`button[data-trainer-id='${trainerId}']`).parentElement.lastChild;
                renderPokemon(ul, json);
            })
            .catch(err => console.log(err));
    };

    const removePokemon = (pokemonId) => {
        const delObj = {
            method: "DELETE"
        };
        fetch(POKEMONS_URL+`/${pokemonId}`, delObj)
            .then(res => res.json())
            .then(json => {
                const li = document.querySelector(`button[data-pokemon-id='${pokemonId}']`).parentElement;
                li.remove();
            })
            .catch(err => console.log(err));
    };

    const renderTrainer = (trainer) => {
        const div = document.createElement('div');
        div.setAttribute("class", "card");
        div.setAttribute("data-id", trainer.id);
        const p = document.createElement('p');
        p.innerText = trainer.name;
        const addbtn = document.createElement('button');
        addbtn.setAttribute('data-trainer-id', trainer.id);
        addbtn.innerText = "Add Pokemon";
        const ul = document.createElement('ul');
        trainer.pokemons.forEach(pokemon => {
            renderPokemon(ul, pokemon);
        });
        main.appendChild(div);
        div.appendChild(p);
        div.appendChild(addbtn);
        div.appendChild(ul);

        addbtn.onclick = () => {
            addPokemon(trainer.id)
        }
    }

    const renderPokemon = (ul, pokemon) => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.setAttribute('class', 'release');
        btn.setAttribute('data-pokemon-id', pokemon.id);
        btn.innerText = "Release";
        li.innerHTML = `${pokemon.nickname} (${pokemon.species}) `
        li.appendChild(btn);
        ul.appendChild(li);

        btn.onclick = () => {
            console.log(pokemon.id)
            removePokemon(pokemon.id);
        }
    };

    const getTrainers = () => {
        fetch(TRAINERS_URL)
            .then(res => res.json())
            .then(json => {
                json.forEach(trainer => {
                    renderTrainer(trainer);
                });
            })
            .catch(err => console.log(err))
    }


    getTrainers();


});

