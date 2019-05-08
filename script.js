let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    
    
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

let btns = document.getElementsByTagName('button');

for (let i = 0; i < btns.length - 1; i++ ) {
    btns[i].disabled = true;
}

let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false,
        start: function() {
            time = prompt("Введите дату в формате YYYY-MM-DD", "");

            while( isNaN(money) || money == '' || money == null) {
                money = +prompt("Ваш бюджет на месяц?", "");
            }

            appData.budget = money;
            appData.timeData = time;
            budgetValue.textContent = money.toFixed();
            yearValue.value = new Date( Date.parse(time) ).getFullYear();
            monthValue.value = new Date( Date.parse(time) ).getMonth() + 1;
            dayValue.value = new Date( Date.parse(time) ).getDate();

            for (let i = 0; i < btns.length - 1; i++) {
                btns[i].disabled = false;
            }
        }
};

startBtn.addEventListener('click', appData.start);

expensesBtn.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let expensesAnswer = expensesItem[i].value,
            expensesSum = expensesItem[++i].value;

        if (typeof(expensesAnswer) === 'string' && typeof(expensesAnswer) != null && typeof(expensesSum) != null
            && expensesAnswer != '' && expensesSum != '' && expensesAnswer.length < 50) {
            appData.expenses[expensesAnswer] = expensesSum;
            sum += +expensesSum;
        } else {
            i--;
        }
    }

    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let optExpenses = optionalExpensesItem[i].value;
        
        appData.optionalExpenses[i] = optExpenses;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function() {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ( (appData.budget - +expensesValue.textContent) / 30).toFixed(2);
        console.log(expensesValue.value);
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий уровень достатка';
        }

    } else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }
});

incomeItem.addEventListener('input', function() {
    let item = incomeItem.value;
    appData.income = item.split(',');

    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
    if(appData.savings === false) {
        appData.savings = true;
    } else {
        appData.savings = false;
    }
});

sumValue.addEventListener('input', function() {
    if(appData.savings === true) {
        let sum     = +sumValue.value,
            percent = +percentValue.value;
        
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;
        
        monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
    }
});

percentValue.addEventListener('input', function() {
    if(appData.savings === true) {
        let sum     = +sumValue.value,
            percent = +percentValue.value;
        
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;
        
        monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
    }
});