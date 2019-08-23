<<<<<<< HEAD
=======
// ここにJavaScriptコードを書く
const tarea = document.getElementById('tarea');
>>>>>>> 2eacc82f16b4b55dabad3e551e8544a65db9cfae
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click',()=>{
<<<<<<< HEAD
    var number1 = input1.value;
    var number2 = input2.value;

    keisan = number2 / (number1 * number1);
    keisan = Math.round(keisan);
    result.innerText = keisan;
=======
    let findtxt = input1.value;
    let reptxt = input2.value;
    let tagtxt = tarea.value;
    
    findtxt = new RegExp(findtxt, '8');
    tagtxt = tagtxt.replace(findtxt, reptxt);

    result.innerText = tagtxt;
>>>>>>> 2eacc82f16b4b55dabad3e551e8544a65db9cfae
});