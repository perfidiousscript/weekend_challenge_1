// declare a global emloyee array and monthly total value to 
// hold onto these data persistantly.
var employeeArray = [], monthlyTotal = 0;


//call up the jQuery script
$(document).ready(function(){

	$("#monthlyTotalPayroll").text("Monthly total payroll costs: " + monthlyTotal)
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
	 	//check that we are getting a nice object from the stripped data:
	 	//console.log(info);

	 	//takes the object with the emplyee data in it, pushes it to the
	 	//global employeeArray var then calls appendToDom with the values object
	 	//thus placing the info onto the DOM
	 	$("#employeeInfo").find("input[type=text]").val();
	 	employeeArray.push(info);
	 	appendToDom(info);
	 });
})

//this function will append whatever is passed into it into the DOM
function appendToDom(employee){
	$("#employeeInfo").append("<div class='employee'></div>")

	//tests argument at this poing
	console.log(employee);
	//make the location a local varible
	var $el = $("#employeeInfo").children().last();

	$el.append("<p>" + employee.employeeName + "</p>");
	$el.append("<p>" + employee.employeeNumber + "</p>");
	$el.append("<p>" + employee.jobTitle + "</p>");
	$el.append("<p>" + employee.yearlySalary + "</p>");
}