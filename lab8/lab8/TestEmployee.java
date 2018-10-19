package lab8;

import static org.junit.Assert.*;

import org.junit.Test;

public class TestEmployee {

	EmployeeDetails emp = new EmployeeDetails();
	EmpBusinessLogic empBL =new EmpBusinessLogic();
		   
	//test objects are not null
	@Test
	public void testEmployeeObjects() {
		assertNotNull(emp);
		assertNotNull(empBL);
	}
		   
	//TODO
		   
	//test employee Name
	@Test
	public void testEmpGetName() {
		
	}
		   
	//test monthlySalary of employee
	@Test
	public void testEmpGetMonthlySalary() {
		
	}

	// test to check yearly salary
    @Test
	public void testCalculateYearlySalary() {
		   
	}

	//test to check bonus
	@Test
	public void testCalculateBonus() {
		      
	}

}


