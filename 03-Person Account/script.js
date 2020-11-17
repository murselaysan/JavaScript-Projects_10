

const personAccount = {
  firstName : "Bruce",
  lastName : "Astor",
  incomes : [500, 750, 650, 350, 200],
  expenses : [75, 25, 125, 425],
  totalIncome : function () {
    var sum = this.incomes.reduce(function(a, b){
      return a + b;
    }, 0);  
    return sum;
  },
  totalExpense : function () {
    var sum = this.expenses.reduce(function(a, b){
      return a + b;
    }, 0);  
    return sum;
  },
  addIncome : function (value) {
    return this.incomes.push(value);
  },
  addExpenses : function (value) {
    return this.expenses.push(value);
  },
  accountInfo : function () {
    let totalProfit = this.totalIncome() - this.totalExpense();
    return `${this.firstName} ${this.lastName} has ${totalProfit} dolar profit today`;
  }

}

personAccount.addIncome(700);
personAccount.addExpenses(220);

console.log(personAccount);

console.log(`He has total income : ${personAccount.totalIncome()}`);
console.log(`He has total expenses : ${personAccount.totalExpense()}`);
console.log(personAccount.accountInfo());
