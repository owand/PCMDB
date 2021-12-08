
const menuCheckbox = document.getElementById('menu-check');
const menuItems = document.querySelectorAll('.category-list li');



function CloseMenu() {
   if (window.innerWidth <= 900) {
      for (var i = 0; i < menuItems.length; ++i) {
         menuItems[i].addEventListener('click', function (e) {
            menuCheckbox.click();
         })
      }
   }
}



// Выполняем заново при изменении размера окна
window.addEventListener('load', CloseMenu);
window.addEventListener('resize', CloseMenu);
/* window.addEventListener('resize', function () {
   CloseMenu();
}); */

