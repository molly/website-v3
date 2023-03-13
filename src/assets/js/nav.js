function toggleMenu() {
  var ariaExpanded = this.getAttribute("aria-expanded");
  var links = document.getElementById("nav-links");

  links.classList.toggle("collapsed");

  // Set aria attributes
  if (ariaExpanded === "true") {
    this.setAttribute("aria-expanded", false);
    links.setAttribute("aria-hidden", true);
  } else {
    this.setAttribute("aria-expanded", true);
    links.setAttribute("aria-hidden", false);
  }
}

(function () {
  var menuButton = document.getElementById("menu-toggle");
  menuButton.addEventListener("click", toggleMenu);
})();
