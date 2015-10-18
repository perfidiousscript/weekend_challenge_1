// declare a global emloyee array and monthly total value to 
// hold onto these data persistantly.
var employeeArray = [], monthlyTotal = 0;


//call up the jQuery script
$(document).ready(function(){

	//appends a message to the monthly total payroll section with the 
	//current monthly total payroll
	updatePayroll();	

	//select the employeeInput form and listen for the submit event
	 $("#employeeInput").submit(function(event){

	 	//keeps the submit event from executing its default action
	 	event.preventDefault();

	 	//the object that will hold each employee's information
	 	var info = {}, monthlySalary = 0;

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
	 	appendToDom(info);

	 	//updates monthly total payroll div with the employee's
	 	//monthly salary costs as caluclated from their yearly salary
	 	updatePayroll(info.yearlySalary);
	 });
})

//this function will append whatever is passed into it into the DOM
function appendToDom(employee){
	$("#employeeInfo").append("<div class='employee'><h3>Employee: "+ employee.employeeName+"</h3></div>")
	//tests argument at this poing
	console.log(employee);
	//make the location a local varible
	var $el = $("#employeeInfo").children().last();

	$el.append("<p>Name: " + employee.employeeName + "</p>");
	$el.append("<p>Employee Number: " + employee.employeeNumber + "</p>");
	$el.append("<p>Job title: " + employee.jobTitle + "</p>");
	$el.append("<p> Annual salary: " + employee.yearlySalary + "</p>");
}

function updatePayroll(updateAmount){

	if(updateAmount == null || undefined){
		updateAmount = 0;
	}

	$("#monthlyTotalPayroll").text("Monthly total payroll = $" + annualToMonthly(updateAmount));
}

//function divides annual salary into monthly salary
function annualToMonthly(annual){
	return Math.round(annual/12);
}
