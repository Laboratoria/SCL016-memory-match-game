// import App from './components/App.js';
// import gamePage from './components/App.js';

import {App, gamePageEasy, gamePageMedium, gamePageHard, congratsPage} from './components/App.js';

document.getElementById('root').appendChild(App());


let buttonToEasy = document.getElementById('easy');
buttonToEasy.addEventListener("click", function () {
    
    document.getElementById("root").style.display = "none";
    document.getElementById('gamePageEasy').appendChild(gamePageEasy());
});


let buttonToMedium = document.getElementById('medium');
buttonToMedium.addEventListener("click", function () {
    
    document.getElementById("root").style.display = "none";
    document.getElementById('gamePageMedium').appendChild(gamePageMedium());

});

let buttonToHard = document.getElementById('hard');
buttonToHard.addEventListener("click", function () {
    
    document.getElementById("root").style.display = "none";
    document.getElementById('gamePageHard').appendChild(gamePageHard());

});