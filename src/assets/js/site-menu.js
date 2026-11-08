// The Menu button in the site header opens the full list of the site's pages.
(function () {
  var button = document.getElementById("site-menu-button");
  var menu = document.getElementById("site-menu");
  if (!button || !menu) {
    return;
  }
  function setOpen(open) {
    button.setAttribute("aria-expanded", String(open));
    menu.hidden = !open;
  }
  button.addEventListener("click", function () {
    setOpen(button.getAttribute("aria-expanded") !== "true");
  });
  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape" && !menu.hidden) {
      setOpen(false);
      button.focus();
    }
  });
})();
