package com.alexbombita.bankaccount;

public class Test {

	public static void main(String[] args) {
		BankAccount account_1 = new BankAccount(100.00, 200.00);
		BankAccount account_2 = new BankAccount(10.00, 20.00);
		BankAccount account_3 = new BankAccount();
		
		
		
		BankAccount.displayNumAccounts();
		
	
        System.out.println(account_1.getSavingsBalance());
        System.out.println(account_1.getCheckingBalance());
        
        System.out.println(BankAccount.displayTotalAmount());
//        
        System.out.println(account_1.depositChecking(100));
//        
        System.out.println(account_1.depositSavings(200));

//        
        System.out.println(account_1.withdrawChecking(1000));
//        
        System.out.println(account_1.withdrawSavings(600));
		
		System.out.println(account_1.totalAmount());

	}

}
