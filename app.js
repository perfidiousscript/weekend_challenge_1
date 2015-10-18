//declare a global emloyee array to hold onto this data persistantly
var employeeArray = []


//call up the jQuery script
$(document).ready(function(){
	//select the employeeInput form and listen for the submit event
	 $("#employeeInput").submit(function(event){

	 	//keeps the submit event from executing its default action
	 	event.preventDefault();

	 	//the object that will hold each employee's information
	 	var info = {};

	 	//Goes through the object created from 'submit' and strips out the info into
	 	//a human readable format.
	 	$.each($("#employeeInput").serializeArray(),function(i,field){
	 		//converts each form field into a key with that name
	 		info[field.name] = field.value;
	 	});

	 	console.log(info);

	 });
})

//this function will append whatever is passed into it into the DOM
function appendToDom(){

}