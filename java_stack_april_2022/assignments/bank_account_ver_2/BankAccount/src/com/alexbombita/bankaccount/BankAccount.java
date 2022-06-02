package com.alexbombita.bankaccount;

public class BankAccount {
	//MEMBER VARIABLE
	private double checkingBalance;
	private double savingsBalance;
	public static int numOfAccounts = 0;
	public static double totalAmount;

	
	
	
	//CONSTRUCTORS
	public BankAccount() {
		super();
		numOfAccounts ++;
	}
	
	public BankAccount(double checkingBalance, double savingsBalance) {
		super();
		this.checkingBalance = checkingBalance;
		this.savingsBalance = savingsBalance;
		totalAmount += checkingBalance + savingsBalance;
		numOfAccounts ++;
	}
	
	//METHODS
	
	public static double displayTotalAmount() {
		return totalAmount;
	}
	
	public double depositChecking(double amount){
		double balance = getCheckingBalance();
		balance = balance + amount;
	    setCheckingBalance(balance);
	    totalAmount += amount;
	    return balance;
	}
	
	public double depositSavings(double amount){
		double balance = getSavingsBalance();
		balance = balance + amount;
	    setSavingsBalance(balance);
	    totalAmount += amount;
	    return balance;
	}

	public double withdrawChecking(double amount){
		if (checkingBalance < amount) {
			System.out.println("INSUFFICIENT FUNDS");
		} 
		
		else {
		double balance = getCheckingBalance();
		balance = balance - amount;
	    setCheckingBalance(balance);
	    totalAmount -= amount;
	    return balance;
		}
	    
		return getCheckingBalance();
	}
	
	public double withdrawSavings(double amount){
		if (savingsBalance < amount) {
			System.out.println("INSUFFICIENT FUNDS");
		} else {
		double balance = getSavingsBalance();
		balance = balance - amount;
	    setSavingsBalance(balance);
	    totalAmount -= amount;
	    return balance;
		}
	    return getSavingsBalance();
	}
	
	//GETTERS AND SETTERS

	public double getCheckingBalance() {
		return checkingBalance;
	}


	public void setCheckingBalance(double checkingBalance) {
		this.checkingBalance = checkingBalance;
	}


	public double getSavingsBalance() {
		return savingsBalance;
	}


	public void setSavingsBalance(double savingsBalance) {
		this.savingsBalance = savingsBalance;
	}
	
	
	public static void displayNumAccounts() {
		System.out.print("Accounts Active:");
		System.out.println(numOfAccounts);
	}

	public double totalAmount(){
	    totalAmount = savingsBalance + checkingBalance;
	    return totalAmount;
	}
	


}
