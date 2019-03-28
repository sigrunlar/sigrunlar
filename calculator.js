 const result = document.querySelector("#result")
 
 function sum() {
    var field1 = parseFloat(document.getElementById('num1').value);
    var field2 = parseFloat(document.getElementById('num2').value);
    console.log(field1+field2)
    result.textContent="Result is "+(field1+field2);

 }