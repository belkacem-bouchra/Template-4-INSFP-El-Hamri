/* global console, alert, prompet */
window.onscroll = function() {myFunction()};
        
        function myFunction() {
          if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("header").className = "test";
            document.getElementsByClassName('link').style.color = "black";
          } else {
            document.getElementById("header").className = "";
            document.getElementsByClassName('link').style.color = "white";
          }
        }