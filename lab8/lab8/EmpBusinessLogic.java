package lab8;

public class EmpBusinessLogic {

	   // Calculate yearly salary of employee
	   public double calculateYearlySalary(EmployeeDetails employee) {
		   return 12 * employee.getMonthlySalary();
	   }
		
	   /** Calculate bonus of employee
	    * 
	    *  If employee's monthly salary greater than 10000, bonus is 500.
	    *  Otherwise 1000.
	    */
	    
	   public double calculateBonus(EmployeeDetails employee) {
		   if (employee.getMonthlySalary() > 10000)
		   {
			   return 500;
		   }
		   
		   return 1000;

	   }
}
