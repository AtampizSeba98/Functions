# FUNCIONES en JavaScript

Las Resuestas de los ejecicios estan en el archivo script.js.
CONSIGNAS:

## FUNCTIONS

##### Te voy a plantear ciertas funciones con alguna descripci�n y tu tarea ser� la de escribirla, y con la idea de acotarla �nicamente a lo que debe hacer.

1. La funci�n toma dos par�metros y devuelva la diferencia entre estos.

```javasctript
difference(2,2); // 0
difference(0,2); // -2
```

2. La funci�n toma dos valores y devuelve el producto de estos 

```javasctript
product(2,2); // 4
product(0,2); // 0
```
3. La funci�n recibe un par�metro num�rico entre del 1 al 7 y retorna el d�a de la semana entendiendo que:1 es domingo, 2 es lunes, 3 es martes, etc. Si el par�metro recibido est� fuera del rango, deber� mostrar undefined

```javasctript
printDay(5); // "Jueves"
printDay(41); // undefined
```

4. La funci�n tomar� un par�metro de un array y deber� devovler el �ltimo valor de ese array y undefined si se encuentra vac�o.

```javasctript
lastElement([113,24,23,42,52,16]); // 16
lastElement([]); // undefined
```

5. La siguiente funci�n toma dos par�mteros num�ricos y si el primero es mayor al segundo, muestra un mensaje "El primero es mayor", de lo contrario mostrar� "El segundo es mayor". Si ambos n�meros son iguales, muestra "los n�meros son iguales":

```javasctript
numberCompare(1,1); // "los n�meros son iguales"
numberCompare(2,1); // "El primero es mayor"
numberCompare(1,2); // "El segundo es mayor"
```

6. La funci�n recibe dos par�metros de tipo string. El primero debe ser una palabra y el segundo una letra. Deber� devolver la cantidad de veces que aparece la letra en la palabra. La funci�n no es sensible a may�sculas/min�sculas. De no encontrarse la letra, la funci�n devuelve "0"

```javasctript
singleLetterCount('Kalidoscopio','O'); // 3
singleLetterCount('Orden de Compra','e'); // 2
```

7. La siguiente funci�n recibe una cadena y deber� devolver un objeto donde las letras ser�n key y el value ser� el recuento de la letra.

```javasctript
multipleLetterCount("hello"); // {h:1, e: 1, l: 2, o:1}
multipleLetterCount("person"); // {p:1, e: 1, r: 1, s:1, o:1, n:1}
```

8. Esta funci�n debe tener como m�ximo cuatro par�metros (un array, comando, ubicaci�n y valor).

    - Si el comando es "remove" y la ubicaci�n es "end", la funci�n debe eliminar el �ltimo valor del array y devolver el valor eliminado. (En este caso, la funci�n solo necesita tres argumentos).
    - Si el comando es "remover" y la ubicaci�n est� "beginning", la funci�n debe eliminar el primer valor del array y devolver el valor eliminado. (En este caso, la funci�n solo necesita tres argumentos).
    - Si el comando es "add" y la ubicaci�n est� "beginning", la funci�n debe agregar el valor (cuarto par�metro) al comienzo del array y devolver el array.
    - Si el comando es "add" y la ubicaci�n es "end", la funci�n debe agregar el valor (cuarto par�metro) al final del array y devolver el array.

```javasctript
arrayManipulation([1,2,3], "remove", "end"); // 3
arrayManipulation([1,2,3], "remove", "beginning"); // 1
arrayManipulation([1,2,3], "add", "beginning", 20); // [20,1,2,3]
arrayManipulation([1,2,3], "add", "end", 30); // [1,2,3,30]
```

9. Por ultimo, te propongo que con todo el conocimiento hasta ahora adquirido, escribas un programa que se base en el juego de Piedra, Papel, Tijera. Mediante el uso del `prompt`, una persona puede ingresar su elecci�n y mediante una selecci�n aleatorio podr� ganar, perder o empatar contra la computadora. 




Saludos!! 

