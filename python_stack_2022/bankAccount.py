class BankAccount:

    def __init__(self, int_rate= .25, balance = 0): 
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        self.balance -= amount            
        return self

    def display_account_info(self):
        if self.balance <= 0:
            self.balance -= 5
            print(f"Insufficient Funds: {self.balance}")
        else:    
            print(f"Balance: {self.balance}")
            return self

    def yield_interest(self):
        self.balance += (self.balance * self.int_rate)
        return self

alex = BankAccount()
kim = BankAccount()

# alex.deposit(100).display_account_info()
# alex.withdraw(25).display_account_info()
# alex.yield_interest()
# alex.display_account_info()

# alex.deposit(25).deposit(25).deposit(25).withdraw(25).yield_interest().display_account_info()

# kim.deposit(50).deposit(25).withdraw(10).withdraw(5).withdraw(5).withdraw(10).yield_interest().display_account_info()






