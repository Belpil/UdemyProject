let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };
// let questionCounter = 0;

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

appData.moneyPerDay = appData.budget / 30;


alert("Ваш бюджет на один день равен " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}

console.log(appData);