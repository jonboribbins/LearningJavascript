<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Calculator</title>
    <style>
        input[type="text"], button {
            width: 50px;
            height: 30px;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <input type="text" id="num1">
    <select id="operator">
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
    </select>
    <input type="text" id="num2">
    <button onclick="calculate()">Calculate</button>
    <p id="result"></p>

    <script>
        function calculate() {
            var num1 = parseFloat(document.getElementById("num1").value);
            var num2 = parseFloat(document.getElementById("num2").value);
            var operator = document.getElementById("operator").value;
            var result;

            switch (operator) {
                case "add":
                    result = num1 + num2;
                    break;
                case "subtract":
                    result = num1 - num2;
                    break;
                case "multiply":
                    result = num1 * num2;
                    break;
                case "divide":
                    result = num1 / num2;
                    break;
                default:
                    result = "Invalid operator";
            }

            document.getElementById("result").textContent = "Result: " + result;
        }
    </script>
</body>
</html>
