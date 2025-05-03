import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4'

let currentPlayer = "circle";

const handleClick = (event) => {
    const clickCtverce = event.target

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
  

const ikona = document.querySelector(".icon4");
    if (currentPlayer === "circle") {
        ikona.src = "obrazky/circle.svg";
    } else {
        ikona.src = "obrazky/cross.svg";
}
checkWinner(); //vypiš
};

//výsledek
const hraciPole = document.querySelectorAll(".čtverec");

const checkWinner = () => {
  const herniPole = Array.from(hraciPole).map((ctverec) => {
    if (ctverec.classList.contains("čtverec--cross")) {
      return "x";
    } else if (ctverec.classList.contains("čtverec--circle")) {
      return "o";
    } else {
      return "_";
    }
  });

  const vitez = findWinner(herniPole);

  if (vitez === "x" || vitez === "o") { // || nebo
    setTimeout(() => {                  // Spusť nějaký kód po určitém čase
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