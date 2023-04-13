export function navBarEvents() {
  const menuBusines = document.querySelector(".busines-services-menu");
  const documentaryMenu = document.querySelector(
    ".documentary-transactions-menu"
  );
  const businesServices = document.querySelector(".busines-services");
  const additionalMenu = document.querySelector(".additional-services-menu");
  const factoringMenu = document.querySelector(".factoring-menu");
  const documentary = document.querySelector(".documentary-transactions");
  const credits = document.querySelector(".credits");
  const menuCredits = document.querySelector(".credits-menu");
  const factoring = document.querySelector(".factoring");
  const additional = document.querySelector(".additional-services");

  businesServices.addEventListener("mouseenter", () => {
    menuBusines.classList.add("active");
  });

  businesServices.addEventListener("mouseleave", () => {
    menuBusines.classList.remove("active");
  });

  credits.addEventListener("mouseenter", () => {
    menuCredits.classList.add("active");
  });

  credits.addEventListener("mouseleave", () => {
    menuCredits.classList.remove("active");
  });

  factoring.addEventListener("mouseenter", () => {
    factoringMenu.classList.add("active");
  });

  factoring.addEventListener("mouseleave", () => {
    factoringMenu.classList.remove("active");
  });

  documentary.addEventListener("mouseenter", () => {
    documentaryMenu.classList.add("active");
  });

  documentary.addEventListener("mouseleave", () => {
    documentaryMenu.classList.remove("active");
  });

  additional.addEventListener("mouseenter", () => {
    additionalMenu.classList.add("active");
  });

  additional.addEventListener("mouseleave", () => {
  additionalMenu.classList.remove("active");
});

};