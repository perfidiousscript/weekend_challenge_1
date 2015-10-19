# weekend_challenge_1

Script takes in four employee parameters, and appends them to the DOM in a new div. Each employee div is given a data attribute equvalent to the employee name. Then the employee monthly salary is added to a global object. Each time a new employee is added the element is iterated through, summed and this sum is posted as the monthly payroll cost.

Each employee div comes with a remove button. When pressed this button (using the data attribute) finds and removes the employee monthly salary from the salary object, recalculates the monthly payroll costs and removes that employee's parameters from the DOM. 


Prime digital academy weekend challange 1.

Specs: 
        The application should first have an input form that collects:
        The Employee's First and Last name
        The Employee's ID Number
        The Employee's Job Title
        The Employee's Salary (Yearly)
        The form should have a submit button that clears out the form and your logic should store that information. 
        Then, that information should be appended to the DOM so that the user of the application can see the information they 
        just entered.
        
        Finally, your logic should calculate all of the employee salaries and report back what the monthly cost of salaries is.
        
        Hard Mode
        Create a delete button that removes an employee from the form. 
        Note that in hard mode, it need not remove that Employee's salary from the reported total.
        
        Pro Mode
        Once the employee is deleted, also update the total spend on salaries to discount the removed employee's salary. 
        This will require that the logic knows which element was removed. You will need to stretch yourself for this one. 
        I also recommend that you look into jQuery's .data() function to help complete this. 
        Note, you will need to do something both when the employee is added and when they are deleted to make your application 'smart'.
        
  
