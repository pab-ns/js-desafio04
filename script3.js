// let getNumber = () => {
//     let n1 = document.getElementById("valor1").value;
//     let n2 = document.getElementById("valor2").value;
// }

// let number1 = parseInt(n1);
// let number2 = parseInt(n2);

// let resultAdd = number1 + number2;
// let resultSub = number1 - number2;





let btnAdd = document.getElementById("btn-sumar");
let btnSub = document.getElementById("btn-restar");


btnAdd.addEventListener("click", function(){
    let n1 = document.getElementById("valor1").value;
    let n2 = document.getElementById("valor2").value;

    let number1 = parseInt(n1);
    let number2 = parseInt(n2);

    let resultAdd = number1 + number2;

    let result = document.querySelector(".resultado").innerHTML = resultAdd;
})

btnSub.addEventListener("click", function(){
    let n1 = document.getElementById("valor1").value;
    let n2 = document.getElementById("valor2").value;

    let number1 = parseInt(n1);
    let number2 = parseInt(n2);

    let resultSub = number1 - number2;
    if (resultSub < 0){
        resultSub = 0;
    } 

    let result = document.querySelector(".resultado").innerHTML = resultSub;
})




