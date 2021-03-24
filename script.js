const actualBudget = document.querySelector(".budget");
const enterBudget = document.querySelector(".enter-budget");
const submitBudgetBtn = document.querySelector(".submit-budget");

const enterIncome = document.querySelector(".income-input");
const descriptionIncome = document.querySelector(".income-description");
const submitIncomeBtn = document.querySelector(".submit-income");

const enterExpense = document.querySelector(".expense-input");
const descriptionExpense = document.querySelector(".expense-description");
const submitExpenseBtn = document.querySelector(".submit-expense");

const expenseAndIncomeDiv = document.querySelector(".expense-and-income");

const enterBudgetFunc = function () {
  if (enterBudget.value === "") {
    alert("Please enter a budget!");
  } else {
    actualBudget.innerHTML = `Budget: ${enterBudget.value}`;
    enterBudget.value = "";
  }
};

submitBudgetBtn.addEventListener("click", enterBudgetFunc);
