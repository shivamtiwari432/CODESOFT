const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const historyList = document.getElementById("history-list");
const themeToggle = document.getElementById("theme-toggle");
const toggleHistory = document.getElementById("toggle-history");
const historyPanel = document.getElementById("history-panel");
const body = document.body;

let currentInput = "";

// Event listeners for calculator buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      currentInput = "";
      updateDisplay("0");
    } else if (value === "DEL") {
      currentInput = currentInput.slice(0, -1);
      updateDisplay(currentInput || "0");
    } else if (value === "=") {
      try {
        const result = eval(currentInput).toString();
        addHistory(currentInput + " = " + result);
        currentInput = result;
        updateDisplay(result);
      } catch {
        updateDisplay("Error");
        currentInput = "";
      }
    } else {
      currentInput += value;
      updateDisplay(currentInput);
    }
  });
});

// Display update
function updateDisplay(value) {
  display.innerText = value;
}

// History tracking
function addHistory(entry) {
  const li = document.createElement("li");
  li.textContent = entry;
  historyList.prepend(li);
}

// Theme toggling
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  themeToggle.textContent = body.classList.contains("dark-mode") ? "🌙 Dark" : "🌞 Light";
});

// History toggle
toggleHistory.addEventListener("click", () => {
  historyPanel.style.display = historyPanel.style.display === "block" ? "none" : "block";
  toggleHistory.textContent = historyPanel.style.display === "block" ? "🕘 Hide History" : "🕘 Show History";
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  if ((e.key >= "0" && e.key <= "9") || "+-*/.%".includes(e.key)) {
    currentInput += e.key;
    updateDisplay(currentInput);
  } else if (e.key === "Enter") {
    try {
      const result = eval(currentInput).toString();
      addHistory(currentInput + " = " + result);
      currentInput = result;
      updateDisplay(result);
    } catch {
      updateDisplay("Error");
      currentInput = "";
    }
  } else if (e.key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput || "0");
  } else if (e.key.toLowerCase() === "c") {
    currentInput = "";
    updateDisplay("0");
  }
});
