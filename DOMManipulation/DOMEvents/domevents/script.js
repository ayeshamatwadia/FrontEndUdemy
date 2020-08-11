var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	ul.appendChild(createNewListItem(input));
	ul.appendChild(createButton());
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// My Solution to the exercise

var ul = document.querySelector("ul");

ul.addEventListener("click", function(e){
	if(e.target.tagName === "LI"){
		e.target.classList.toggle("done");
	}	
})

function createButton() {
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("DELETE"));
	button.addEventListener("click", deleteFunction);
	return button;
  };

  function createNewListItem (input) {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	return li;
  };

  var deleteButtons = document.getElementsByClassName("delete");

//   deleteButtons.array.forEach(element => {
// 	  element.addEventListener("click", deleteFunction);
//   });

  for(var i=0; i< deleteButtons.length; i++){
	deleteButtons[i].addEventListener("click", deleteFunction);
  }

  function deleteFunction(e) {
	ul.removeChild(e.target.previousElementSibling);
	ul.removeChild(e.target);
  }