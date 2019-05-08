let money, time;

let startCount = document.getElementById('start'),
    expensesInputs = document.getElementsByClassName('expenses-item'),
    optionalExpensesInputs = document.querySelectorAll('.optionalexpenses-item'),
    expensesBtn = document.querySelector('.expenses-item-btn')
    optionalExpensesBtn = document.querySelector('.optionalexpenses-btn')
    countBtn = document.querySelector('.count-budget-btn'),
    startCountingBtn = document.getElementById('start'),
    incomeInput = document.getElementById('income'),
    savingsCheckbox = document.getElementById('savings')
    sumInput = document.getElementById('sum'),
    percentInput = document.getElementById('percent'),
    yearInput = document.querySelector('.year-value'),
    monthInput = document.querySelector('.month-value'),
    dayInput = document.querySelector('.day-value');

let valueBlocks = [],
    resultTable = document.querySelector('.result-table').children;

for (let i = 0; i < resultTable.length; i++) {
    if(resultTable[i].className.includes('-value')) {
        valueBlocks.push(resultTable[i]);
    }
}

// let appData = {
//         budget: money,
//         timeData: time,
//         expenses: {},
//         optionalExpenses: {},
//         income: [],
//         savings: true,
//         start: function() {
//             time = prompt("Введите дату в формате YYYY-MM-DD", "");

//             while( isNaN(money) || money == '' || money == null) {
//                 money = +prompt("Ваш бюджет на месяц?", "");
//                 appData.budget = money;
//             }
//         },
//         chooseExpenses: function() {
//             for (let i = 0; i < 2; i++) {
//                 let expensesAnswer = prompt("Введите обязательную статью расходов в этом месяце", ""),
//                     expensesSum = +prompt("Во сколько обойдется?", "");
        
//                 if (typeof(expensesAnswer) === 'string' && typeof(expensesAnswer) != null && typeof(expensesSum) != null
//                     && expensesAnswer != '' && expensesSum != '' && expensesAnswer.length < 50) {
//                     appData.expenses[expensesAnswer] = expensesSum;
//                 } else {
//                     i--;
//                 }
//             }
//         },
//         detectDayBudget: function() {
//             appData.moneyPerDay = (appData.budget / 30).toFixed();
//             alert("Ваш бюджет на один день равен " + appData.moneyPerDay);
//         },
//         checkSavings: function() {
//             if (appData.savings === true) {
//                 let save = +prompt('Какова сумма накоплений?', ''),
//                     precent = +prompt('Под какой процент?', '');
        
//                 appData.monthIncome = save / 100 / 12 * precent;
//                 alert('Доход с месяц с Вашего депозита: ' + appData.monthIncome);
//             }
//         },
//         detectLevel: function() {
//             if (appData.moneyPerDay < 100) {
//                 console.log('Минимальный уровень достатка');
//             } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//                 console.log('Средний уровень достатка');
//             } else if (appData.moneyPerDay > 2000) {
//                 console.log('Высокий уровень достатка');
//             } else {
//                 console.log('Произошла ошибка');
//             }
//         },
//         chooseOptExpenses: function() {
//             for (let i = 1; i < 4; i++) {
//                 let optExpenses = prompt('Статья необязательных расходов?', '');
        
//                 if (optExpenses !== '') {
//                     appData.optionalExpenses[i] = optExpenses;
//                 }
//             }
//         },
//         chooseIncome: function() {
//             let items;

//             while (typeof(items) !== 'string' || items === '' || items === ' ') {
//                 items = prompt('Что перенесет дополнительный доход? (Перечислить через запятую)', '');
//             }

//             appData.income = items.split(',');

//             items = prompt('Может что-то еще?', '').trim();

//             if (typeof(items) === 'string' && items !== '') {
//                 appData.income.push(items);
//             }

//             appData.income.sort();

//             console.log('Способы доп заработка: ');
//             appData.income.forEach(function(item, i) {
//                 console.log(i + 1 + '. ' + item);
//             });
//         }
// };

// appData.start();

// appData.chooseExpenses();

// appData.chooseOptExpenses();

// appData.detectDayBudget();

// appData.detectLevel();

// appData.checkSavings();



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