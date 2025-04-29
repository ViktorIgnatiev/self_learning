'use strict'

/*  
Типів транзакцій всього два.  
Можна покласти чи зняти гроші з рахунку.  
*/  

const Transaction = {  
    DEPOSIT: "deposit",  
    WITHDRAW: "withdraw",  
};

/*  
* Кожна транзакція це об'єкт із властивостями: id, type та amount */  

const account = {  
    // Поточний баланс рахунку  
    balance: 0,   

    // Історія транзакцій  
    transactions: [],  
    lastId: 0,
    /*  
    Метод створює та повертає об'єкт транзакції.  
    Приймає суму та тип транзакції.  
    */  
    createTransaction(amount, type) {
        return {
            id: this.lastId++,
            type,
            amount
        }
    },


/*
* Метод, що відповідає за додавання суми до балансу.
* Приймає суму транзакції.
* Викликає createTransaction для створення об'єкта транзакції
* після чого додає його до історії транзакцій
*/
    deposit(amount) {
        this.balance += amount
        this.transactions.push(this.createTransaction(amount, this.transactions.DEPOSIT))
},

/*
* Метод, що відповідає за зняття суми з балансу.
* Приймає суму транзакції.
* Викликає createTransaction для створення об'єкта транзакції
* після чого додає його до історії транзакцій.
*
* Якщо amount більше ніж поточний баланс, виводь повідомлення
* про те, що зняття такої суми не можливе, недостатньо коштів.
*/
    withdraw(amount) {
    if (amount > this.balance) {
        console.log('Зняття такої суми не можливе, недостатньо коштів.');   
        }
        this.balance -= amount
},

/*  
* Метод повертає поточний баланс  
*/  
getBalance() {},  

/*  
* Метод шукає та повертає об'єкт транзакції по id  
*/  
getTransactionDetails(id) {},  

/*  
* Метод повертає кількість коштів  
* певного типу транзакції з усієї історії транзакцій  
*/  
getTransactionTotal(type) {},  
};



// console.log(account.createTransaction(1000, Transaction.DEPOSIT));
