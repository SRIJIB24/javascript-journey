const type = document.getElementById("type");
const amount = document.getElementById("amount");
const addBtn = document.getElementById("addBtn");

const expenseList = document.getElementById("expense-list");
const totalAmount = document.getElementById("total-amount");

function renderList() {
  expenseList.innerHTML = "";
  let total = 0;

  expenses.forEach((exp, index) => {
    const li = document.createElement("li");
    li.textContent = `${exp.type} : ${exp.amount}`;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => {
      expenses.splice(index, 1);
      localStorage.setItem("expenses", JSON.stringify(expenses));
      renderList();
    });

    li.appendChild(delBtn);
    expenseList.appendChild(li);

    total += exp.amount;
  });

  totalAmount.textContent = total;
}

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
function addList() {
  const expenseType = type.value;
  const expenseAmount = parseFloat(amount.value);

  if (expenseType == "" || isNaN(expenseAmount)) {
    alert("Please Enter Expense Type or Amount");
    return;
  }

  const expense = {
    type: expenseType,
    amount: expenseAmount,
  };
  expenses.push(expense);

  localStorage.setItem("expenses", JSON.stringify(expenses));

  renderList();

  type.value = "";
  amount.value = "";
}

addBtn.addEventListener("click", addList);
renderList();
