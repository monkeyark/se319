package lab8;

public class BankAccount
{
  String customer;
  int balance;
  
  public BankAccount(String customer)
  {
	  this.customer = customer;
  }
  
  public void setBalance(int balance)
  {
	  this.balance = balance;
  }
  
  public int getBalance()
  {
	  return this.balance;
  }
  
}
