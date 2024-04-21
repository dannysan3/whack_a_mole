let plante;
let blomst;
let sisteTall = -1;
let piper=["pipe1", "pipe2", "pipe3", "pipe4", "pipe5", "pipe6", "pipe7", "pipe8", "pipe9"]
score = 0
let timer;
let intervallId;
function oppstart() {

    intervallId = setInterval(figurNaa, 2000);
}
 
//Henter random brikke, sørger for at man ikke trekker samme
function randomBrikke() {
    let ind;
    do {
        ind = Math.floor(Math.random() * piper.length);
    } while (ind === sisteTall); 
    sisteTall = ind; 
    return piper[ind];
}

function figurNaa() {
    
    //Trekker tilfeldig pipe og oppdaterer fiugerene
    let pipeId = randomBrikke();
    let pipeId2= randomBrikke();

    plante = document.getElementById("p1");
    blomst = document.getElementById("b1");

    let pipeElement = document.getElementById(pipeId);
    let pipeElement2 = document.getElementById(pipeId2);

    oppdaterPos(plante, pipeElement);
    oppdaterPos(blomst, pipeElement2);

}

//Funksjon for å oppdatere posisjon til elementer
function oppdaterPos(element, pipeElement) {
    element.setAttribute("x", pipeElement.getAttribute("x"));
    element.setAttribute("y", pipeElement.getAttribute("y"));
    element.style.visibility = "visible";
}


function gameOver() {
    
    // Henter game over boksen og gjør den synlig
    let gameOverBox = document.getElementById("game-over-box");
    gameOverBox.style.display = "block";
    let rundeScoreSpan = document.getElementById("rundeScore");
    rundeScoreSpan.textContent = score;

    // Henter highscore tabellen og legger til ny rad
    let table = document.getElementById("score-table");
    let newRow = table.insertRow(-1); 
    let cell1 = newRow.insertCell(0); 
    let cell2 = newRow.insertCell(1); 
    let currentDate = new Date();
    cell1.textContent = currentDate.toLocaleTimeString() 
    cell2.textContent = score;
    //Stopper timer slik at figurNaa blir kalt
    clearInterval(intervallId)

    //Skjuler planter
    plante.style.visibility = "hidden";
    blomst.style.visibility = "hidden";
}

function spillIgjen() {
    let gameOverBox= document.getElementById("game-over-box");
    gameOverBox.style.display = "none";
    score = 0;
    oppstart(); 
}


document.addEventListener("DOMContentLoaded", function() {


    let blomst = document.getElementById("b1");
    let plante = document.getElementById("p1");

    //Hvis man klikker blomst får man poeng
    blomst.addEventListener("click", function() {
        score += 100;
        document.getElementById("score").innerHTML = score;
    });

    //Hvis man trykker planete dør man
    plante.addEventListener("click", function() {
        gameOver()
    });


});