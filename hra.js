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
    };

const ikona = document.querySelector(".icon4");
    if (currentPlayer === "circle") {
        src = ikona.src = "obrazky/circle.svg";
    } else {
        src = ikona.src = "obrazky/cross.svg";
}
};

const hraciPole = document.querySelectorAll(".čtverec");

hraciPole.forEach((policko) => {
    policko.addEventListener("click", handleClick)
   });
