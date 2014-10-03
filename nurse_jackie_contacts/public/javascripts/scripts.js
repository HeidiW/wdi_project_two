console.log("hello")

var nurses = ["Jackie Peyton", "Zoe Barkow", "Thor Lundgren"];
var doctors = ["Fitch Cooper", "Elenor O'Hara", "Carrie Roman"];
var administators = ["Gloria Akalitus"];
var pharmacists = ["Eddie Walzer"]

var addNursesButton = document.getElementById('addbutton');

addNursesButton.addEventListener("click", function(){
	var nursediv = document.getElementById("nurses");
	var ul = document.getElementById('nursesul');
     
    // for (var i = 0; i < nurses.length; i++); 
    // 	var addnurse = document.createElement("li");
  	//  addnurse.innerText = nurses[i];
    // 	ul.appendChild(addnurse);

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
     
    // for (var i = 0; i < nurses.length; i++); 
    // 	var addnurse = document.createElement("li");
  	//  addnurse.innerText = nurses[i];
    // 	ul.appendChild(addnurse);

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
     
    // for (var i = 0; i < nurses.length; i++); 
    // 	var addnurse = document.createElement("li");
  	//  addnurse.innerText = nurses[i];
    // 	ul.appendChild(addnurse);

    for (var i = 0; i < administrators.length; i++) {
    	var listItem = document.createElement("li");

    	var administrator = administrators[i]

    	listItem.innerText = administrator;
        ul.appendChild(listItem);
    	
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