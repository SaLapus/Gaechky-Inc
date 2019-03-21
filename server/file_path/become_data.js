function draw_meal(data, id)
{
  for(var i = 0; i < data.length; i++)
  {
    var form = document.getElementsByClassName("menu")[0];

    var child = document.createElement("div");
    var child_content = document.createTextNode(data[i].name.toString());
    var child_class = document.createAttribute("class");
    var child_id = document.createAttribute("id");

    child_class.value = "buttonEdaDrinkContent"
    child_id.value = id + i.toString();

    child.setAttributeNode(child_class);
    child.setAttributeNode(child_id);
    child.appendChild(child_content);
    form.appendChild(child);
  }
}

function draw_eda_napitki(parent, data)
{
  for(var i = 0; i < data.length; i++)
  {
    var child = document.createElement("button");
    var child_class = document.createAttribute("class");
    child_class.value = "buttonEdaDrinkLink";

    var child_func = document.createAttribute("onclick");
    child_func.value = `openEdaDrink(event, \"id${i}\")`;

    var child_content = document.createTextNode(data[i].name.toString());

    child.setAttributeNode(child_class);
    child.setAttributeNode(child_func);
    child.appendChild(child_content);
    form.appendChild(child);

    draw_meal(data[i].menu, `id${i}`)
  }
}

var data;
var	form	=	document.getElementsByClassName("selector")[0];
console.log(form.getAttribute("class"));

var req = new XMLHttpRequest();
req.open("GET", "menu/Mon.json", true);
req.addEventListener("load",
  () =>
  {
    console.log(`Done: ${req.status}\n${req.responseText}`);
    data = JSON.parse(req.responseText);
    console.log(data);
    draw_eda_napitki(form, data.food_var);
  });
req.send(null);
