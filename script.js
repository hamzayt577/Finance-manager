const budget = prompt("What is your budget (please enter a number 😁)");
const actualBudget = parseFloat(budget);

const actualBudgetUI = document.querySelector(".budget");

export const enterIncome = document.querySelector(".income-input");
export const descriptionIncome = document.querySelector(".income-description");
const submitIncomeBtn = document.querySelector(".submit-income");

export const enterExpense = document.querySelector(".expense-input");
export const descriptionExpense = document.querySelector(
  ".expense-description"
);
const submitExpenseBtn = document.querySelector(".submit-expense");

const expenseAndIncomeDiv = document.querySelector(".expense-and-income");

const incomeDescriptions = [];
const incomeAmounts = [];

const expenseDescriptions = [];
const expenseAmounts = [];

document.querySelector(".budget").innerHTML = `Budget: ${actualBudget}`;

const incomeFunc = function () {
  if (enterIncome.value === "" && descriptionIncome.value === "") {
    alert("Please enter income and income description");
  } else {
    let enterIncomeValue = enterIncome.value;
    let descriptionIncomeValue = descriptionIncome.value;
    incomeDescriptions.push(descriptionIncomeValue);
    incomeAmounts.push(enterIncomeValue);
    enterIncome.value = "";
    descriptionIncome.value = "";
    loopIncomeDesc();
    loopIncomeAmount();
    renderIncomeHTML(descriptionIncomeValue, enterIncomeValue);
  }
};

const loopIncomeDesc = function () {
  incomeDescriptions.forEach((desc) => {});
};

const loopIncomeAmount = function () {
  incomeAmounts.forEach((amount) => {
    let amountNumber = parseInt(amount);
    actualBudgetUI.innerHTML = `Budget: ${amountNumber + actualBudget}`;
  });
};

const renderIncomeHTML = function (name, value) {
  const markup = `
  <div class="income">
      <span class="income-name">${name}</span>
      <span class="income-amount">${value}</span>
    </div>
  `;

  expenseAndIncomeDiv.insertAdjacentHTML("afterbegin", markup);
};

const expenseFunc = function () {
  const enterExpenseString = parseFloat(enterExpense.value);
  if (enterExpense.value === "" && descriptionExpense.value === "") {
    alert("Please enter expense and expense description");
  } else {
    if (actualBudget < enterExpenseString) {
      alert("Your expense is over your budget!");
      descriptionExpense.value = "";
      enterExpense.value = "";
    } else {
      expenseDescriptions.push(descriptionExpense.value);
      expenseAmounts.push(enterExpense.value);
      loopExpenseDesc();
      loopExpenseAmount();
      renderExpenseHTML(descriptionExpense.value, enterExpense.value);
      descriptionExpense.value = "";
      enterExpense.value = "";
    }
  }
};

const loopExpenseDesc = function () {
  expenseDescriptions.forEach((desc) => {});
};

const loopExpenseAmount = function () {
  expenseAmounts.forEach((amount) => {
    let amountNumber = parseFloat(amount);
    actualBudgetUI.innerHTML = `Budget: ${actualBudget - amountNumber}`;
  });
};

const renderExpenseHTML = function (name, value) {
  const markup = `
  <div class="expense">
      <span class="expense-name">${name}</span>
      <span class="expense-amount">${value}</span>
    </div>
  `;

  expenseAndIncomeDiv.insertAdjacentHTML("afterbegin", markup);
};

submitIncomeBtn.addEventListener("click", incomeFunc);
submitExpenseBtn.addEventListener("click", expenseFunc);
