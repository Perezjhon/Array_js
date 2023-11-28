/* exercise one*/
document.write("<h3>ELEMENTOS DE UN ARRAY </h3>")
const numbers = [1, 2, 3, 4, 5]

document.write("el array en su posicion es: "+numbers [0] +"<br>")
document.write("el array en su pocision dos es: "+numbers [2]+"<br>")

let index = 4

document.write("para acceder a los elemntos de un array: "+numbers[index]+"<br>")
"<br>"

document.write("<h3>MODIFICAR ELEMENTOS DE UN ARRAY</h3>")

numbers[0] = 10
numbers[2] = 30

document.write("el array modificado va ser: "+numbers[0]+"<br>")
document.write("el array modificado va ser: "+numbers[2]+"<br>")

document.write("podemos modificar los array:   "+numbers+"<br>")

document.write("<h3>LA LONGITUD DE UN ARRAY</h3>")
const frutas = ["manzana", "pera", "plátano", "fresa"]

document.write("la longitud de una array es de: "+frutas+"<br>")

/*cortar longitud*/
document.write("podemos conocer su longitud: "+frutas.length+"<br>")
frutas.length = 2
document.write("cortar su longitud: "+frutas+"<br>")
document.write("podemos conocer su longitud: "+frutas.length+"<br>")

/* Metodos de arrays */

document.write("<h3>METODOS DE ARRAYS<h3>")

document.write("nos permite agregar un elemento: "+frutas+"<br>")

frutas.push("naranja")

document.write("agregamos el elemento al final: "+frutas+"<br>")



