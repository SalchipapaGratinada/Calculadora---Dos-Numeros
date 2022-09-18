function calcular() {
    /* const resultado = 0; */
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const op = document.getElementById("ope").value;
    if (num1.length ==0 || num2.length == 0) {
        alert("Debe Llenar Los Campos De Numeros ");
    }else{
        switch (op) {
            case 'Suma':
                const sum = () => {
                   return Number(num1) + Number(num2);
                }  
                document.getElementById("resultado").innerHTML = "El Rest. De La Suma Es: "+ sum() +"";
                console.log(sum());
                break;
            case 'Resta':
                const res = () => {
                    return Number(num1) - Number(num2);
                 }  
                 document.getElementById("resultado").innerHTML = "El Rest. De La Resta Es: "+ res() +"";
                 console.log(res());
                break;
            case 'Multiplicacion':
                const mul = () => {
                    return Number(num1) * Number(num2);
                 }  
                 document.getElementById("resultado").innerHTML = "El Rest. De La Multiplicacion Es: "+ mul() +"";
                 console.log(mul());
                break;
            case 'Division':
                if (Number(num2) == 0) {
                    alert("No Se Puede Realizar Division Entre Cero. Verifique.")
                }else{
                    const div = () => {
                        return Number(num1) / Number(num2);
                     }  
                     document.getElementById("resultado").innerHTML = "El Rest. De La Division Es: "+ div() +"";
                     console.log(div());
                }
                break;
            default:
                break;
        }
    }
}

/* funciones de flecha de las operaciones */


