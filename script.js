let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    appData = {
        budget: +money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    },
    expensesAnswer = prompt("Введите обязательную статью расходов в этом месяце", ""),
    expensesSum = +prompt("Во сколько обойдется?", "");

    appData.expenses[expensesAnswer] = expensesSum;

    alert("Ваш бюджет на один день равен " + (appData.budget - appData.expenses.expensesSum) / 30);

    console.log(appData);