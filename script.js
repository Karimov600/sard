let num1 = parseFloat(prompt("Введите первое число:"));
let oper = prompt("Введите оператор (+, -, *, /):");
let num2 = parseFloat(prompt("Введите второе число:"));

if (oper === "+") {
    alert(`Результат: ${num1 + num2}`);
} else if (oper === "-") {
    alert(`Результат: ${num1 - num2}`);
} else if (oper === "*") {
    alert(`Результат: ${num1 * num2}`);
} else if (oper === "/") {
    if (num2 !== 0) {
        alert(`Результат: ${num1 / num2}`);
    } else {
        alert("Ошибка: деление на ноль!");
    }
} else {
    alert("Ошибка: неверный оператор!");
}
