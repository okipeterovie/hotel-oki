var show = false;

window.addEventListener("load", function () {
  document.getElementById("menu-hamburger").onclick = function () {
    var menu = document.getElementById("main-menu");
    if (menu.classList) {
      show = menu.classList.toggle("show");
    } else {
      // For IE9
      var classes = menu.className.split(" ");
      var i = classes.indexOf("show");

      if (i >= 0) {
        classes.splice(i, 1);
      } else {
        classes.push("show");
        show = true;
      }
      menu.className = classes.join(" ");
    }
  };
});
