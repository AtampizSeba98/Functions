 //1- 
 /* function diference(a,b){
  
  return a-b;
}

var diferencia = diference(0,2);
console.log(suma);*/
//2
/*
 function product(a,b){
  
    return a*b;
  }
  
  var producto = product(0,2);
  console.log(producto);*/
//3 
/*function printday (d){
    var semana = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];
    if (d > 0 && d < 8)
    {
        return console.log(semana[d -1]);
    }
    else{
        return console.log('undefined');
    }
      
}
 printday(1);
*/
//4-
/*
function lastelement (v){
    var array = [], array=v, u=array.length
    if (array== NaN)
    {
        console.log('undefined');
        
     }
    else
    {
        
        
    }

}
lastelement([113,24,23,42,52,16]);*/

//5-
/*function numbercompare(a,b){
    if (a==b){console.log('son iguales');}
    if (a>b){console.log('el primero es mayor ');}
    if (a<b){console.log('el segundo es mayor ');}   
}
numbercompare(1,2);*/
//6-
/*
function singleLetterCount(cadena, caracter){
  var indices = [];
  for(var i = 0; i < cadena.length; i++) {
    if (cadena[i].toLowerCase() === caracter) indices.push(i);
    if(cadena[i].toUpperCase() === caracter) indices.push(i);
  }
	return indices.length;
}
var coincidencias = singleLetterCount('KaOoolidOscopio','O');
console.log(coincidencias);
*/
//7
/*
var cantletras =new Object();
cadena='yacqueline';
//unicos* 
var unicos = Array.from(new Set(cadena)).join(''), array=[],
array=unicos;
indices=[];

for (var j= 0; j<array.length;j++)
{
  c=0;
  for(var i = 0; i < cadena.length; i++) {
    if (cadena[j] == cadena[i])
    { 
      c++;
      indices.push(c);} 
    
}

}
console.log(indices);


/*



//8
/*
function arrayManipulation (a,c,u,v=1){
  var array = [], array=a, b=array.length;

  if (c=='remove'&&u=='end')
  {  
     console.log(array[b-1]);
     array.pop();  
  }
  if (c=='remove'&& u=='beginning'){
    
     console.log(array[0]);
     array.shift();
  }
  if (c=='add'&& u=='beginning'){
    array.unshift(v);
     console.log(array);
  }
  if (c=='add'&& u=='end'){
    array.push(v);
     console.log(array);
  }

}
arrayManipulation([1,2,3,4,5,6],'remove','end');*/
//9-
/*
juego();
function pregunta (){
  var resp=prompt('desea seguir jugando? -1 si/ -2 no');
  if (resp== 1 || resp == 'si'|| resp=='SI'){
    juego();
  }
  if (resp==2 || resp=='no'|| resp =='NO'){
     close();
  }
}
function juego()
{
  var computadoraElige = Math.floor((Math.random() * (4-1))+1);
  var Jugada = prompt ("¿Tu Jugada es 1-piedra, 2-papel o 3-tijera?");
  
  if (Jugada =='piedra'|| Jugada== 1||Jugada=="PIEDRA"||Jugada=='Piedra')
  {
    if (computadoraElige == 2){
      alert('Perdiste la computadora eligio papel');
      pregunta();
    }
    if (computadoraElige==1){
      alert('Empataron la computadora eligio piedra');
      pregunta();
    }
    if (computadoraElige==3){
      alert ('Ganaste la computadora eligio tijeras');
      pregunta();
    }
  }
  if (Jugada =='papel'|| Jugada== 2||Jugada=="PAPEL"||Jugada=='Papel')
  {
    if (computadoraElige == 3){
      alert('Perdiste la computadora eligio tijeras');
      pregunta();
    }
    if (computadoraElige==2){
      alert('Empataron la computadora eligio papel');
      pregunta();
    }
    if (computadoraElige==1){
      alert ('Ganaste la computadora eligio piedra');
      pregunta();
    }
  }
  if (Jugada =='tijeras'|| Jugada== 3||Jugada=="TIJERAS"||Jugada=='Tijeras')
  {
   if (computadoraElige == 1){
        alert('Perdiste la computadora eligio Piedra');
        pregunta();
      }
   if (computadoraElige==3){
        alert('Empataron la computadora eligio tijeras');
        pregunta();
      }
   if (computadoraElige==2){
        alert ('Ganaste la computadora eligio papel');
        pregunta();
      }
  }
}
*/