// declare a global emloyee array and monthly total value to 
// hold onto these data persistantly.
var employeeArray = [], monthlySalaries = {}, totalMonthlySalaries, employeePlace = 0;


//call up the jQuery script
$(document).ready(function(){

	//appends a message to the monthly total payroll section with the 
	//current monthly total payroll
	updatePayroll(monthlySalaries);	

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

	 	//clears the form boxes aster submission
	 	$("#employeeInput").find("input[type=text]").val("");

	 	//takes the object with the emplyee data in it, pushes it to the
	 	//global employeeArray var then calls appendToDom with the values object
	 	//thus placing the info onto the DOM
	 	employeeArray.push(info);

	 	//Adds employee info to the end of the emplyeeInput div
	 	appendToDom(info);

	 	//functionality for the removeEmployee button (when clicked it finds 
	 	//the nearest "employee" DOM element and remove the whole thing)
	 	$("button").on("click", function(){
	 		var $container = $(this).closest(".employee");
	 		console.log("evals to: ", $container.data("name"));
	 		delete monthlySalaries[$container.data("name")];
	 		$container.remove();
	 		updatePayroll(monthlySalaries);	
	 	});

	 	//updates monthly total payroll div with the employee's
	 	//monthly salary costs as calculated from their yearly salary
	 	updatePayroll(monthlySalaries);
	 });
})

//this function will append whatever is passed into it into the DOM
function appendToDom(employee){
	$("#employeeInfo").append("<div class='employee'><h3>Employee: "+ employee.employeeName+"</h3><button>Remove Employee</button></div>")
	//tests argument at this point
	//console.log(employee);

	//make the location a local variable
	var $el = $("#employeeInfo").children().last();

	$el.append("<p>Name: " + employee.employeeName + "</p>");
	$el.append("<p>Employee Number: " + employee.employeeNumber + "</p>");
	$el.append("<p>Job title: " + employee.jobTitle + "</p>");
	$el.append("<p> Annual salary: " + employee.yearlySalary + "</p>");

	//adds the employee name monthly salary with the monthly salary keyed to it
	monthlySalaries[employee.employeeName] = annualToMonthly(employee.yearlySalary);

	//gives the employee div a data tag equivalent to Employee Name
	$el.data("name", employee.employeeName);
	console.log("At first: ", $el.data("name"));
	//console.log(monthlySalaries); 
}

//When called this function updates the 
function updatePayroll(updateAmount){
	totalMonthlySalaries = 0;

	for(salary in updateAmount){
		totalMonthlySalaries += parseInt(updateAmount[salary]);
	}

	$("#monthlyTotalPayroll").text("Monthly total payroll = $" + totalMonthlySalaries);
	console.log("salaries object: ", updateAmount);
}

//function divides annual salary into monthly salary
function annualToMonthly(annual){
	return Math.round(annual/12);
}

//a function that removes employee from the DOM
