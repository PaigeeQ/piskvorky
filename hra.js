let currentPlayer = "circle";

const policka = document.querySelectorAll(".čtverec");

policka.forEach((policko) => {
    policko.addEventListener("click", () => {
        if (policko.classList.contains("čtverec--circle"))
           (policko.classList.contains("čtverec--cross"))
         { return 
        }
        if (currentPlayer === "circle") {
            policko.classList.add("čtverec--circle")
            currentPlayer = "cross"
        } else {
            policko.classList.add("čtverec--cross")
            currentPlayer = "circle"
        }
    })
});

const handleClick = (event) => {
    const clickCtverce = event.target
    if (clickCtverce.classList.contains("čtverec--circle") ||
       clickCtverce.classList.contains("čtverec--cross"))
    { return 
    }
        clickCtverce.classList.add("čtverec--circle")
};

const hraciPole = document.querySelectorAll(".čtverec");
hraciPole.forEach((pole) => {
    pole.addEventListener("click", handleClick)
});