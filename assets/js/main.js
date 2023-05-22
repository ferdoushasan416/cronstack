"use strict";

(function(){

    var header = document.getElementById ('header-section');

document.getElementById("nav-toggle").addEventListener("click", function() {
    var content = document.getElementById("btn-wrap");
    var contentInner = document.getElementById("btn-wrap-inner");
    if(!header.classList.contains('expanded')) {
        header.classList.add("expanded");
        content.style.display = "block";
        var height = contentInner.clientHeight;
        content.style.height = height + "px";
    }else{
        header.classList.remove("expanded");
        content.style.height = 0;
    }
  });
      
})();