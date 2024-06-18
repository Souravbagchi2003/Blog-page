// comment button
var btn = document.getElementById("btn_3");
var btnText = document.getElementById("btn_3Text");

 btn.onclick = function () 
  {
  btnText.innerHTML = "Thanks";
  btn.classList.add("active");
};


// search box
const searchBox=document.querySelector('search-box');
const serachBtn=document.querySelector('.search-btn');
const search=document.querySelector('.search');
const closeBtn=document.querySelector('.close-btn');

serachBtn.addEventListener('click', function(){
  console.log(search.classList.contains('active-1'))
  if(search.classList.contains('active-1'))
  {
    searchBox.value=''
  }
  
else
{
  search.classList.add('active-1');
  searchBox.focus();
}
})


closeBtn.addEventListener('click', function(){
  search.classList.remove('active-1');
  searchBox.value='';
})
function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
// // auto search
// let availablekeywords=[
//   'Taxi Booking are Changing the Travel Industry',
//   'Taxi Benefits of Online Taxi Booking Services',
//   'How to Save Time and Money on Your Travel'
// ];

// const resultsBox=document.querySelector(".result-box");
// const inputBox=document.getElementById("search-box");

// inputBox.onkeyup=function()
// {
//   let result=[];
//   let input=inputBox.value;
//   if(input.length)
//     {
//       result=availablekeywords.filter((keyword)=>{
//        return keyword.toLowerCase().includes(input.toLowerCase());
//       });
// console.log(result)
//     }
// }

// function display(result)
// {
//   const content =result.map((list)=>)
//   {
//     return "<li>" +list+ "</li>";
//   }
// }