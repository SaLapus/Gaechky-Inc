function openEdaDrink(evt, edaDrink) {
var tabcontent, tablinks;


tabcontent = document.getElementsByClassName("buttonEdaDrinkContent");
for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}

tablinks = document.getElementsByClassName("buttonEdaDrinkLink");
for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
}


  console.log(edaDrink);




  while((var meals = document.getElementById(edaDrink + i.toString())) != undefined)
  {
    console.log(meals);
    meals.style.display = "block";
    evt.currentTarget.className += " active";
  }
}
