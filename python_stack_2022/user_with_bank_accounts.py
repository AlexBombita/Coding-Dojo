from bankAccount import BankAccount


class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount()

    def user_deposit(self, amount):
        self.account.deposit(amount)
        return self
        
    def user_withdraw(self, amount):
        self.account.withdraw(amount)
        return self

    def user_display_account_info(self):
        print(self.account.balance)
        return self

    def user_yield_interest(self):
        self.account.yield_interest
        return self

alex = User('alex', 'alex@gmail.com')

alex.user_deposit(25).user_display_account_info()

# alex.user_deposit(25).user_deposit(25).user_deposit(25).user_withdraw(100).user_yield_interest().user_display_account_info()





