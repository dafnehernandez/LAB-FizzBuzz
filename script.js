
//Buscamos el id lista para guardarlo en la constante lista
const lista = document.getElementById("lista"); 

//Ciclo iterativo para generar numeros
for(let i = 1; i < 1001; i++){
    //Para imprimir en lista desde HTML se define a texto
    let texto = "";
    //Para usar un color en cada impresion (4 tipos)
    let color = "";
//Checamos que imprima del 1 al 1000 este console no se queda al final
    //console.log(i)
    //Condicion prioritaria encontrar casos de FizzBuz 
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
        texto = "FizzBuzz";
        color = "goldenrod";
    }
    else if (i % 3 == 0){
        console.log("Fizz");
        texto = "Fizz";
        color = "red";
    }
    else if (i % 5 == 0){
        console.log("Buzz")
        texto = "Buzz";
        color = "blue";
    }
    else {
        console.log(i)
        texto = i
        color = "forestgreen";
    }
    //Creamos un nuevo elemento de HTML desde aqui
    const li = document.createElement("li");
    //Rellena el li anterior con texto o con numero --> <li>Fiiz</li>
    li.textContent = texto;
    // quita el punto SIN CSS, solo es elemento estetico
    li.type = "none"; 
    //Aplicamos color para cada tipo de elemento
    li.style.color = color;
    //Inserta ese li que ya tiene texto en el ul definido en HTML que se llama lista
    lista.appendChild(li);
}