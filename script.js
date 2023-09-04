function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var d = 0; d < dropdowns.length; d++) {
        var openDropdown = dropdowns[d];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  var btns = document.querySelectorAll(".btn-category");
  Array.from(btns).forEach(item => {
    item.addEventListener("click", () => {
      var selected = document.getElementsByClassName("active");
      selected[0].className = selected[0].className.replace(" active", "");
      item.className += " active";
    });
  });



 