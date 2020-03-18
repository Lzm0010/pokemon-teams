document.addEventListener("DOMContentLoaded", () => {

});

const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

const main = document.querySelector('main');

<div class="card" data-id="1"><p>Prince</p>
  <button data-trainer-id="1">Add Pokemon</button>
  <ul>
    <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
    <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
    <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
    <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
    <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
  </ul>
</div>

const renderTrainer = (trainer) => {
    const div = document.createElement('div');
    div.setAttribute("class", "card");
    div.setAttribute("data-id", "1");
    const p = document.createElement('p');
    p.innerText = trainer.name;
    const btn = document.createElement('button');
    btn.setAttribute('data-trainer-id', '1');
    btn.innerText = "Add Pokemon";
    const ul = document.createElement('ul');
    main.appendChild(div);
    div.appendChild(p);
    div.appendChild(btn);
    div.appendChild(ul);
}