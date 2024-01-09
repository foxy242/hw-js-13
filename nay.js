const bankAccount = {
    ownerName: "Ім'я власника",
    accountNumber: "Номер рахунку",
    balance: 0,
  
    deposit: function(amount) {
      this.balance += amount;
      this.displayBalance();
    },
  
    withdraw: function(amount) {
      if (amount > this.balance) {
        console.log("Недостатньо коштів на рахунку.");
      } else {
        this.balance -= amount;
        this.displayBalance();
      }
    },

    displayBalance: function() {
      const balanceDisplay = document.getElementById("balanceDisplay");
      balanceDisplay.textContent = `Залишок на рахунку: ${this.balance} грн.`;
    }
  };
  
const depositButton = document.getElementById("depositBtn");
const withdrawButton = document.getElementById("withdrawBtn");

depositButton.addEventListener("click", function() {
  const amount = parseFloat(prompt("Введіть суму для поповнення:"));
  if (!isNaN(amount) && amount > 0) {
    bankAccount.deposit(amount);
  } else {
    console.log("Будь ласка, введіть коректну суму.");
  }
});

withdrawButton.addEventListener("click", function() {
  const amount = parseFloat(prompt("Введіть суму для зняття:"));
  if (!isNaN(amount) && amount > 0) {
    bankAccount.withdraw(amount);
  } else {
    console.log("Будь ласка, введіть коректну суму.");
  }
});

bankAccount.displayBalance();

// task 1

// let bankAccount = {
//     ownerName: 'Georgiy Chikilyov',
//     accountNumber: '5168752021406064',
//     balance: 100,
// }
