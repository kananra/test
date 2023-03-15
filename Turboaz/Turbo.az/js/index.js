const barter = document.querySelector("#barterCheck");
const kredit = document.querySelector("#creditCheck");
const barterLabel = document.querySelector("#barter");
const kreditLabel = document.querySelector("#credit");


barter.addEventListener("click", () => {
  if (barterLabel.style.background === "red") {
    barterLabel.style.background = "white";
    barterLabel.style.color = "black";
    barter.value = 0;
  } else {
    barterLabel.style.background = "red";
    barterLabel.style.color = "white";
    barter.value = 1;
  }
});

kredit.addEventListener("click", () => {
  if (kreditLabel.style.background === "red") {
    kreditLabel.style.background = "white";
    kreditLabel.style.color = "black";
    kredit.value = 0;
  } else {
    kreditLabel.style.background = "red";
    kreditLabel.style.color = "white";
    kredit.value = 1;
  }
});
