// Select all filter buttons and filter card
const filterbutton = document.querySelectorAll(".filterbutton button");
const filterCard = document.querySelectorAll(".filtercard .card");

// Define the filterCards Function
const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    filterCard.forEach(card => {

        card.classList.add("hide");

        if(card.dataset.name === e.target.dataset.name ||e.target.dataset.name === "all"){
            card.classList.remove("hide");
        }
    });
};

// add click event listener to each filter button
filterbutton.forEach(button => button.addEventListener("click",filterCards));