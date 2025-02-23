
let numeroSecreto  = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo  = 10;

function asignarTextoElemento(elemento, texto){
  let elementoHTML =  document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function verificarIntento(){
  let numeroDeUsuario =  parseInt(document.getElementById('valorUsuario').value);
  
  if(numeroDeUsuario === numeroSecreto){
    asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos > 1 ? 'intentos': 'intento'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  }else{
    if(numeroDeUsuario > numeroSecreto){
      asignarTextoElemento('p','El numero secreto es menor');
    }else{
      asignarTextoElemento('p','El numero secreto es mayor');
    }
    intentos ++;
    limpiarCaja();
  }
}
function limpiarCaja(){
  document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
  let numeroGenerado =  Math.floor(Math.random()*numeroMaximo) + 1;
  //Si ya sorteamos todos los numeros
  if(listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p','Ya se sortearon todos los numeros enteros');
  }else {
  //Si el numero esta incluido en la lista
  if(listaNumerosSorteados.includes(numeroGenerado)){
    return  generarNumeroSecreto();
  }else{
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
  }
}
  
}

function condicionesIniciales(){
  asignarTextoElemento('h1','Juego del numero secreto');
  asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos =  1;
}

function reiniciarJuego(){
  // Limpiar la caja
  limpiarCaja();
  condicionesIniciales();
  //deshabilitar  el boton de nuevo juego
  document.getElementById('reiniciar').setAttribute('disabled','true');
  
}

condicionesIniciales();



