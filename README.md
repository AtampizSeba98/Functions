# FUNCIONES en JavaScript

Las Resuestas de los ejecicios estan en el archivo script.js.
CONSIGNAS:

## FUNCTIONS

##### Te voy a plantear ciertas funciones con alguna descripción y tu tarea será la de escribirla, y con la idea de acotarla únicamente a lo que debe hacer.

1. La función toma dos parámetros y devuelva la diferencia entre estos.

```javasctript
difference(2,2); // 0
difference(0,2); // -2
```

2. La función toma dos valores y devuelve el producto de estos 

```javasctript
product(2,2); // 4
product(0,2); // 0
```
3. La función recibe un parámetro numérico entre del 1 al 7 y retorna el día de la semana entendiendo que:1 es domingo, 2 es lunes, 3 es martes, etc. Si el parámetro recibido está fuera del rango, deberá mostrar undefined

```javasctript
printDay(5); // "Jueves"
printDay(41); // undefined
```

4. La función tomará un parámetro de un array y deberá devovler el último valor de ese array y undefined si se encuentra vacío.

```javasctript
lastElement([113,24,23,42,52,16]); // 16
lastElement([]); // undefined
```

5. La siguiente función toma dos parámteros numéricos y si el primero es mayor al segundo, muestra un mensaje "El primero es mayor", de lo contrario mostrará "El segundo es mayor". Si ambos números son iguales, muestra "los números son iguales":

```javasctript
numberCompare(1,1); // "los números son iguales"
numberCompare(2,1); // "El primero es mayor"
numberCompare(1,2); // "El segundo es mayor"
```

6. La función recibe dos parámetros de tipo string. El primero debe ser una palabra y el segundo una letra. Deberá devolver la cantidad de veces que aparece la letra en la palabra. La función no es sensible a mayásculas/minúsculas. De no encontrarse la letra, la función devuelve "0"

```javasctript
singleLetterCount('Kalidoscopio','O'); // 3
singleLetterCount('Orden de Compra','e'); // 2
```

7. La siguiente función recibe una cadena y deberá devolver un objeto donde las letras serán key y el value será el recuento de la letra.

```javasctript
multipleLetterCount("hello"); // {h:1, e: 1, l: 2, o:1}
multipleLetterCount("person"); // {p:1, e: 1, r: 1, s:1, o:1, n:1}
```

8. Esta función debe tener como máximo cuatro parámetros (un array, comando, ubicación y valor).

    - Si el comando es "remove" y la ubicación es "end", la función debe eliminar el último valor del array y devolver el valor eliminado. (En este caso, la función solo necesita tres argumentos).
    - Si el comando es "remover" y la ubicación está "beginning", la función debe eliminar el primer valor del array y devolver el valor eliminado. (En este caso, la función solo necesita tres argumentos).
    - Si el comando es "add" y la ubicación está "beginning", la función debe agregar el valor (cuarto parámetro) al comienzo del array y devolver el array.
    - Si el comando es "add" y la ubicación es "end", la función debe agregar el valor (cuarto parámetro) al final del array y devolver el array.

```javasctript
arrayManipulation([1,2,3], "remove", "end"); // 3
arrayManipulation([1,2,3], "remove", "beginning"); // 1
arrayManipulation([1,2,3], "add", "beginning", 20); // [20,1,2,3]
arrayManipulation([1,2,3], "add", "end", 30); // [1,2,3,30]
```

9. Por ultimo, te propongo que con todo el conocimiento hasta ahora adquirido, escribas un programa que se base en el juego de Piedra, Papel, Tijera. Mediante el uso del `prompt`, una persona puede ingresar su elección y mediante una selección aleatorio podrá ganar, perder o empatar contra la computadora. 




Saludos!! 

