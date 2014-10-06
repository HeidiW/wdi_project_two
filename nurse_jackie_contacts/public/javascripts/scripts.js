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

		var listItem = document.createElement("nursesul");
		listItem.innerHTML = "<li>" + text + "</li>";

		var list = document.getElementById("nursesul");
		list.appendChild(listItem);

		textbox.value = ""
	}
});

var newDoctorsButton = document.getElementById("createdoctor");

newDoctorsButton.addEventListener("click", function() {
    var textbox = document.getElementById("newstaffdoctor");
    var text = textbox.value;
    if(text != "") {

        var listItem = document.createElement("ul");
        listItem.innerHTML = "<li>" + text + "</li>";

        var list = document.getElementById("createdoctorlist");
        list.appendChild(listItem);

        textbox.value = ""
    }
});

var newAdministratorsButton = document.getElementById("createadministrator");

newAdministratorsButton.addEventListener("click", function(){

    var textbox = document.getElementById("newstaffadministrator");
    var text = textbox.value;

    if(text != "") {
        var listItem = document.createElement("ul");
        listItem.innerHTML = "<li>" + text + "</li>"

        var list = document.getElementById("createadministratorlist");
        list.appendChild(listItem);

        textbox.value = ""
    }
});

var newPharmacistsButton = document.getElementById("createpharmacist");

newPharmacistsButton.addEventListener("click", function(){
    var textbox = document.getElementById("newstaffpharmacist");
    var text = textbox.value;

    if(text != "") {
        var listItem = document.createElement("ul");
        listItem.innerHTML = "<li>" + text + "</li>"

        var list = document.getElementById("createpharmacistlist");
        list.appendChild(listItem);

        textbox.value = ""
    }
});

var deleteNurseButton = document.getElementById("delete_nurses")

deleteNurseButton.addEventListener("click", function() {
    var deleteNursesInput = document.getElementById("nurse_delete_button");
    var text = deleteNursesInput.value;

    var list = document.getElementById("nursesul");
    console.log(list);
    var listItems = list.children;
    console.log(listItems);

    for( var i = 0; i < listItems.length; i++){
        var listItem = listItems[i];
        var nurseName = listItem.innerText; 
        if (nurseName == text) {
            listItem.parentNode.removeChild(listItem);
        };
    }
    deleteNursesInput.value = ""; 
});

var deleteDoctorButton = document.getElementById("delete_doctors")

deleteDoctorButton.addEventListener("click", function(){
    var deleteDoctorsInput = document.getElementById("doctor_delete_button");
    var text = deleteDoctorsInput.value;

    var list = document.getElementById("doctorsul");
    console.log(list);
    var listItems = list.children;
    console.log(listItems);

    for( var i = 0; i < listItems.length; i++){
        var listItem = listItems[i];
        var doctorName = listItem.innerText;
        if (doctorName == text) {
            listItem.parentNode.removeChild(listItem);
        };
    }
    deleteDoctorsInput.value = "";

});
    /*var delete_nurses = document.querySelector('ul.nurses li')
    var removeNurse = function() {
      nurse.parentElement.removeChild(nurse);
    }

    delete_nurses.addEventListener('click', removeNurse);
    var removeElement = function(delete_nurses) {
      list.parentElement.removeChild(nursesul);
    };


*/


