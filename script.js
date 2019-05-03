let money, time;

let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true
    };

function start() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while( isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
        appData.budget = money;
    }
}

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let expensesAnswer = prompt("Введите обязательную статью расходов в этом месяце", ""),
            expensesSum = +prompt("Во сколько обойдется?", "");

        if (typeof(expensesAnswer) === 'string' && typeof(expensesAnswer) != null && typeof(expensesSum) != null
            && expensesAnswer != '' && expensesSum != '' && expensesAnswer.length < 50) {
            appData.expenses[expensesAnswer] = expensesSum;
        } else {
            i--;
        }
    }
}

function checkSavings() {
    if (appData.savings === true) {
        let save = +prompt('Какова сумма накоплений?', ''),
            precent = +prompt('Под какой процент?', '');

        appData.monthIncome = save / 100 / 12 * precent;
        alert('Доход с месяц с Вашего депозита: ' + appData.monthIncome);
    }
}

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ваш бюджет на один день равен " + appData.moneyPerDay);
}

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка');
    }
}

function chooseOptExpenses() {

    for (let i = 1; i < 4; i++) {
        let optExpenses = prompt('Статья необязательных расходов?', '');

        if (optExpenses !== '') {
            appData.optionalExpenses[i] = optExpenses;
        }
    }
}

start();

chooseExpenses();

chooseOptExpenses();

detectDayBudget();

detectLevel();

checkSavings();



// let questionCounter = 0;

// while (questionCounter < 2) {
//     let expensesAnswer = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         expensesSum = +prompt("Во сколько обойдется?", "");

//     if (typeof(expensesAnswer) === 'string' && typeof(expensesAnswer) != null && typeof(expensesSum) != null
//         && expensesAnswer != '' && expensesSum != '' && expensesAnswer.length < 50) {
//         appData.expenses[expensesAnswer] = expensesSum;
//     } else {
//         questionCounter--;
//     }

//     questionCounter++;
// }

// do {
//     let expensesAnswer = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         expensesSum = +prompt("Во сколько обойдется?", "");

//     if (typeof(expensesAnswer) === 'string' && typeof(expensesAnswer) != null && typeof(expensesSum) != null
//         && expensesAnswer != '' && expensesSum != '' && expensesAnswer.length < 50) {
//         appData.expenses[expensesAnswer] = expensesSum;
//     } else {
//         questionCounter--;
//     }

//     questionCounter++;
// } while (questionCounter < 2);