function appendValue(value) {
  const display = document.getElementById('display');
  if (display.value === '0' || display.value === 'Error') {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  document.getElementById('display').value = '0';
}

function deleteLast() {
  const display = document.getElementById('display');
  if (display.value.length > 1) {
    display.value = display.value.slice(0, -1);
  } else {
    display.value = '0';
  }
}

function calculate() {
  const display = document.getElementById('display');
  try {
    const result = Function('"use strict"; return (' + display.value + ')')();
    display.value = parseFloat(result.toFixed(9));
  } catch (error) {
    display.value = 'Error';
  }
}

function copyToClipboard() {
  const display = document.getElementById('display');
  navigator.clipboard.writeText(display.value)
    .then(() => {
      display.style.border = '2px solid #00b894';
      setTimeout(() => {
        display.style.border = '2px solid #ccc';
      }, 800);
    });
}

document.getElementById('themeSwitch').addEventListener('change', function () {
  document.querySelector('.calculator').classList.toggle('dark', this.checked);
});
