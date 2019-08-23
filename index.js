const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click',()=>{
    var number1 = input1.value;
    var number2 = input2.value;

    keisan = number2 / (number1 * number1);
    keisan = Math.round(keisan);
    result.innerText = keisan;
});