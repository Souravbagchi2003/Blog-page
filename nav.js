// navigation scroll down
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navigation_down").style.top = '0px';
    }
    else {
        document.getElementById("navigation_down").style.top = "70px";
    }
}

// pagination
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("home-articles");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" w3-red", "");
  // }
  x[slideIndex-1].style.display = "block";  
  // dots[slideIndex-1].className += " w3-red";
}
// let currentPage=1
// const cardsperpage=3;
// function displayPage(page)
// {
// const startIndex=(page-1)*cardsperpage;
// const endIndex=startIndex+cardsperpage;
// cardsperpage.forEach((card,index)=> {
//   if(index>=startIndex && index<endIndex)
//     {
//       card.style.display='block';
//     }
//     else
//     {
//       card.style.display='none';
//     }
// });
// }
// displayPage(currentPage);
// showDivs();