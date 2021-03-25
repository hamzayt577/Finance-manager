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

submitIncomeBtn.addEventListener("click", incomeFunc);
