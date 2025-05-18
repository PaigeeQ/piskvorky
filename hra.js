import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4'

let currentPlayer = "circle";

//aktuální stav hrací plochy
const getBoardState = () => {
  return Array.from(document.querySelectorAll(".čtverec")).map((ctverec) => {
    if (ctverec.classList.contains("čtverec--cross")) return "x";
    if (ctverec.classList.contains("čtverec--circle")) return "o";
    return "_";
  });
};

// AI API - návrh tahu pro hráče "x"
const getAIMove = async (board) => {
  const response = await fetch('https://piskvorky.czechitas-podklady.cz/api/suggest-move', {
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' }, 
    body: JSON.stringify({ board: board, player: 'x' }), 
  });
  const data = await response.json();
  return data.position; // { x: 1, y: 2 }
};

//Změna ikonky hráče
const updateIkona = () => {
  const ikona = document.querySelector(".icon4");
  ikona.src = currentPlayer === "circle" ? "obrazky/circle.svg" : "obrazky/cross.svg";
};

//AI odehraje tah 
const playAIMove = async () => {
  document.querySelectorAll(".čtverec").forEach((policko) => policko.disabled = true)
// BONUS: Zablokuj rháče během čekání na AI 

  const board = getBoardState();
  const aiMove = await getAIMove(board); 
  const index = aiMove.y * 10 + aiMove.x; // :D výpočet indexu
  const square = document.querySelectorAll(".čtverec")[index];

  if (!square.classList.contains("čtverec--circle") && !square.classList.contains("čtverec--cross")) {
    square.classList.add("čtverec--cross", "animace");
    square.disabled = true;
    currentPlayer = "circle";
    updateIkona();
    checkWinner();
  }


document.querySelectorAll(".čtverec").forEach((policko) => {
    if (!policko.classList.contains("čtverec--circle") && !policko.classList.contains("čtverec--cross")) {
      policko.disabled = false;
    }
  });
};

const handleClick = async (event) => {
    const clickCtverce = event.target;

    if (clickCtverce.classList.contains("čtverec--circle") ||
       clickCtverce.classList.contains("čtverec--cross"))

    { return 

    } if (currentPlayer === "circle") {
        clickCtverce.classList.add("čtverec--circle", "animace")
        currentPlayer = "cross"

    } else {
        clickCtverce.classList.add("čtverec--cross", "animace")
        currentPlayer = "circle"
    }
    clickCtverce.disabled = true;
    updateIkona();
    checkWinner(); //vypiš

// const ikona = document.querySelector(".icon4");
//     if (currentPlayer === "circle") {
//         ikona.src = "obrazky/circle.svg";
//     } else {
//         ikona.src = "obrazky/cross.svg";
// }
// checkWinner(); 


// jestli je na tahu křížek a neni konec
if (!findWinner(getBoardState())) {
  setTimeout(() => {
    if (currentPlayer === "cross") {
      playAIMove();
    }
  }, 500);
};
};


const checkWinner = () => {
  const herniPole = getBoardState();
  const vitez = findWinner(herniPole);

  if (vitez === "x" || vitez === "o") {
    setTimeout(() => {
      alert(`Vyhrál hráč se symbolem ${vitez === "x" ? "křížek" : "kolečko"}!`);
      location.reload();
    }, 100);
  } else if (vitez === "tie") {
    setTimeout(() => {
      alert("Hra skončila remízou!");
      location.reload();
    }, 100);
  }
};
 
const hraciPole = document.querySelectorAll(".čtverec");
hraciPole.forEach((policko) => {
    policko.addEventListener("click", handleClick)
   });

const opravduRestart = document.querySelector("#restart");
opravduRestart.addEventListener("click", (event) => {
    event.preventDefault(); //zabrání znova načtení stránky 
    const anoChciRestart = confirm("Opravdu chceš hru restartovat?✔️"); //klik ok/zrušit
    if (anoChciRestart) {
        location.reload(); //funguje jako F5
    } else {
    }
});
