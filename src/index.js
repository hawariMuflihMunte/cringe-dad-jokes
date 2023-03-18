import generateJoke from './generate.joke';
import './scss/main.scss';
import laughing from './assets/laughing.svg';

const laughImg = document.getElementById('laughing');
laughImg.src = laughing;

console.log(generateJoke());
