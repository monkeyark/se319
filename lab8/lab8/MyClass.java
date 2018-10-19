package lab8;


public class MyClass {
	
	// Method to find maximum of three integers.
	public int findMax(int x, int y, int z)
	{
		int max;
		
		if((x>y) && (x>z))
		{
			max = x;
		}
		else if((y>x) && (y>z))
		{
			max = y;
		}
		else
		{
			max = z;
		}
		
		return max;
	}

}
