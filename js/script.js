const showMenu = () => {
  const main_toggle = document.getElementById("main-toggle");
  const main_nav = document.getElementById("main-nav");
  if (main_toggle && main_nav) {
    main_toggle.addEventListener("click", () => {
      main_nav.classList.toggle("showToggle");
    });
  }
};
showMenu();
