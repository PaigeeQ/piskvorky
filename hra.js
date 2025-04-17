let currentPlayer = "circle";

const handleClick = (event) => {
    const clickCtverce = event.target

    if (clickCtverce.classList.contains("čtverec--circle") ||
       clickCtverce.classList.contains("čtverec--cross"))

    { return 

    } if (currentPlayer === "circle") {
        clickCtverce.classList.add("čtverec--circle")
        currentPlayer = "cross"

    } else {
        clickCtverce.classList.add("čtverec--cross")
        currentPlayer = "circle"
    }
    clickCtverce.disabled = true;
  

const ikona = document.querySelector(".icon4");
    if (currentPlayer === "circle") {
        ikona.src = "obrazky/circle.svg";
    } else {
        ikona.src = "obrazky/cross.svg";
}
};

const hraciPole = document.querySelectorAll(".čtverec");

hraciPole.forEach((policko) => {
    policko.addEventListener("click", handleClick)
   });

const opravduRestart = document.querySelector("#restart");

opravduRestart.addEventListener("click", () => {
    const anoChciRestart = confirm("Opravdu chceš hru restartovat?");

}); 