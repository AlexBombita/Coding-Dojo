public class BankAccount{
    // MEMBER VARIABLES or ATTRIBUTES
    private double checkingBalance;
    private double savingsBalance;
    private static int numberOfAccounts = 0;
    private static double totalAmountOfMoney = 0;
    // METHODS

    // FULL CONSTRUCTOR
    public BankAccount(double checkingBalance, double savingsBalance){
        this.checkingBalance = checkingBalance;
        this.savingsBalance = savingsBalance;
        numberOfAccount++;
    }

        // OTHER METHODS
    public void deposit(double depositAmt){
        balance += depositAmt;
        }
        
    }
    // GETTERS AND SETTERS
    // SUSPENSION
    public String getCheckingBalance(){
        return this.checkingBalance;
    }
    public void setCheckingBalnce(String newCheckingBalance){
        this.checkingBalance = newCheckingBalance;
    }

    public String getSavingsBalance(){
        return this.savingsBalance;
    }
    public void setSavingsBalnce(String newSavingsBalance){
        this.savingsBalance = newSavingsBalance;
    }

}