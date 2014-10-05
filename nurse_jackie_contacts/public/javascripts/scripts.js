console.log("hello")

var nurses = ["Jackie Peyton", "Zoe Barkow", "Thor Lundgren"];
var doctors = ["Fitch Cooper", "Elenor O'Hara", "Carrie Roman"];
var administrators = ["Gloria Akalitus"];
var pharmacists = ["Eddie Walzer"]

var addNursesButton = document.getElementById('addbutton');

addNursesButton.addEventListener("click", function(){
	var nursediv = document.getElementById("nurses");
	var ul = document.getElementById('nursesul');
     
    for (var i = 0; i < nurses.length; i++) {
    	var listItem = document.createElement("li");
    	var nurse = nurses[i]
    	listItem.innerText = nurse;
        ul.appendChild(listItem);
    }
});

var addDoctorsButton = document.getElementById('adddoctor');
addDoctorsButton.addEventListener("click", function(){
	var doctordiv = document.getElementById("doctors");
	var ul = document.getElementById('doctorsul');

    for (var i = 0; i < doctors.length; i++) {
    	var listItem = document.createElement("li");
    	var doctor = doctors[i]
    	listItem.innerText = doctor;
        ul.appendChild(listItem);
    }
});

var addAdministratorsButton = document.getElementById('addadministrators');
addAdministratorsButton.addEventListener("click", function(){
	var administratordiv = document.getElementById("administrators");
	var ul = document.getElementById('administratorsul');

    for (var i = 0; i < administrators.length; i++) {
    	var listItem = document.createElement("li");
    	var administrator = administrators[i]
    	listItem.innerText = administrator;
        ul.appendChild(listItem);
    }
});

var addPharmacistsButton = document.getElementById('addpharmacists');
addPharmacistsButton.addEventListener("click", function(){
	var pharmacistdiv = document.getElementById("pharmacists");
	var ul = document.getElementById('pharmacistsul');

    for (var i = 0; i < pharmacists.length; i++) {
    	var listItem = document.createElement("li");
    	var pharmacist = pharmacists[i]
    	listItem.innerText = pharmacist;
        ul.appendChild(listItem);
    }  
});

var newNursesButton = document.getElementById("createnurse");

newNursesButton.addEventListener("click", function() {
	var textbox = document.getElementById("newstaffnurse");
	var text = textbox.value;
	if(text != ""){

		var listItem = document.createElement("ul");
		listItem.innerHTML = "<li>" + text + "</li>";

		var list = document.getElementById("createnurselist");
		list.appendChild(listItem);

		textbox.value = ""
	}
});

var newDoctorsButton = document.getElementById("createdoctor");

newDoctorsButton.addEventsListener("click", function() {
    var textbox = document.getElementById("newstaffdoctor");
    var text = textbox.value;
    if(text != ""){

        var listItem = document.creatElement("ul");
        listItem.innerHTML = "<li>" + text + "</li>";

        var list = document.getElementById("createdoctorlist");
        list.appendChild(listItem);

        textbox.value = ""
    }
});

// function addElToLanguages(text){
// 	var list = document.getElementById("languages_list");
// 	var language = document.createElement("li");
// 	language.innerText = text;
// 	list.appendChild(language);
// };

//  function renderMovie(imageSrc, title) {
//       var div = document.querySelector('div#results');
//       var img = document.createElement('img');
//       img.src = imageSrc;

//       var titleElement = document.createElement('h3');
//       titleElement.innerText = title;

//       div.appendChild(titleElement);
//       div.appendChild(img);
//     }