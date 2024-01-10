// task 1

// const bankAccount = {
// ownerName: 'Georgiy Chikilyov',
// accountNumber: '5168752021406064',
// balance: 100,
  
//     deposit: function(amount) {
//       this.balance += amount;
//       this.displayBalance();
//     },
  
//     withdraw: function(amount) {
//       if (amount > this.balance) {
//         console.log("Недостатньо коштів на рахунку.");
//       } else {
//         this.balance -= amount;
//         this.displayBalance();
//       }
//     },

//     displayBalance: function() {
//       const balanceDisplay = document.getElementById("balanceDisplay");
//       balanceDisplay.textContent = `Залишок на рахунку: ${this.balance} грн.`;
//     }
//   };

// const depositButton = document.getElementById("depositBtn");
// const withdrawButton = document.getElementById("withdrawBtn");

// depositButton.addEventListener("click", function() {
//   const amount = parseFloat(prompt("Введіть суму для поповнення:"));
//   if (!isNaN(amount) && amount > 0) {
//     bankAccount.deposit(amount);
//   } else {
//     console.log("Будь ласка, введіть коректну суму.");
//   }
// });

// withdrawButton.addEventListener("click", function() {
//   const amount = parseFloat(prompt("Введіть суму для зняття:"));
//   if (!isNaN(amount) && amount > 0) {
//     bankAccount.withdraw(amount);
//   } else {
//     console.log("Будь ласка, введіть коректну суму.");
//   }
// });

// bankAccount.displayBalance();

// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". 
// Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", 
// який дозволяє знімати гроші з рахунку. Методи повинні зпрацьовувати при натисканні на кнопки “поповнити рахунок” 
// та отримати ‘готівку’ відповідно. Після проведення операції виводити повідомлення про залишок на рахунку.

// task 2

// const weather = {
//     temperature: 0,
//     humidity: 0,
//     windSpeed: 0,

//     isBelowZero: function() {
//       return this.temperature < 0;
//     }
//   };

//   function checkTemperature() {
//     const temperatureInput = document.getElementById("temperatureInput").value;
//     weather.temperature = parseFloat(temperatureInput);
  
//     if (weather.isBelowZero()) {
//       console.log("Температура нижче 0 градусів Цельсія");
//     } else {
//       console.log("Температура вище або рівна 0 градусів Цельсія");
//     }
//   }

// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". 
// Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", 
// якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з інпуту на сторінці. 
// Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки

// task 3

// const user = {
//     name: "georgiy chikilyov",
//     email: "gosha.chikilyov@gmail.com",
//     password: "12345678910",
  
//     login: function() {
//       const emailInput = document.getElementById("emailInput").value;
//       const passwordInput = document.getElementById("passwordInput").value;
  
//       if (emailInput === this.email && passwordInput === this.password) {
//         console.log("Успішний вхід!");
//       } else {
//         console.log("Неправильний email або пароль.");
//       }
//     }
//   };
  
//   document.getElementById("nameInput").addEventListener("input", function() {
//     user.name = this.value;
//   });
  
//   document.getElementById("emailInput").addEventListener("input", function() {
//     user.email = this.value;
//   });
  
//   document.getElementById("passwordInput").addEventListener("input", function() {
//     user.password = this.value;
//   });

// Створіть об’єкт "user", якbq буде мати властивості "name", "email", "password". Додайте метод "login",
// який буде перевіряти правильність введеного email та password. 
// Використайте інпути для запису значень властивостей в об’єкт

// task 4

const movie = {
    title: "Годзилла против Конга",
    director: "Адама Вингарда",
    year: 2021,
    rating: 6.17,
  
    // Метод для перевірки рейтингу фільму
    checkRating: function() {
      return this.rating > 8;
    }
  };
  
  // Виведення значень властивостей на сторінку
  document.getElementById("titleDisplay").textContent = movie.title;
  document.getElementById("directorDisplay").textContent = movie.director;
  document.getElementById("yearDisplay").textContent = movie.year;
  document.getElementById("ratingDisplay").textContent = movie.rating;
  
  // Перевірка рейтингу та зміна коліру тексту поля "title"
  const titleDisplay = document.getElementById("titleDisplay");
  if (movie.checkRating()) {
    titleDisplay.style.color = "green";
  }

// Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating".
// Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче.
// Вивести значення властивостей на сторінку. Якщо метод повернув "true" то змінити колір тексту поля title на зелений.