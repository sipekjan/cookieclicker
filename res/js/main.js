
const cookie = document.getElementById("karban");
const counter = document.getElementById("counter");

let numberOfKarban = 0;

cookie.onclick = () => {
    numberOfKarban++;
    //counter.innerHTML = "Cookies: " + numberOfCookies;
    counter.innerHTML = `Počet Karbanů: ${numberOfKarban}`;
} 

