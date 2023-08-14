//Encapsulation is a concept that involves packaging related data (attributes) and behaviors (methods) into a single unit called a class and controls access to these class members through visibility levels.
class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }
  }

  withdraw(amount: number) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdraw $${amount}. New balance: $${this.balance}!`);
    } else {
      console.log("Insufficient funds or invalid amount!");
    }
  }

  getBalance() {
    return this.balance;
  }

  setBalance(newBalance: number) {
    if (newBalance >= 0) {
      this.balance = newBalance;
      console.log(`Balance set to $${this.balance}!`);
    }
  }
}

const currency = new BankAccount();
currency.deposit(1000);
currency.withdraw(500);
console.log(`Balance: $${currency.getBalance()}`);
currency.setBalance(1500);
console.log(
  `=======//=======//=======//=======//=======//=======//=======//=======//=======//`
);
const account = new BankAccount();
account.deposit(11000);
account.withdraw(8000);
console.log(`Balance: $${currency.getBalance()}`);
account.setBalance(15000);
