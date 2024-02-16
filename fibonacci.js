// Función para obtener la serie de Fibonacci
function fibonacci(numero) {
    // Aqui se valida que la entrada digitada por el usuario sea un numero.
    if (isNaN(numero)) {
      alert("El valor introducido no es un número.");
      return
    } 

    // Aqui se define la constante para el arrego que almacenara la serie de numeros.
    const sFibonacci = [0, 1];
  
    // Con este bucle generamos la serie de numeros.
    for (let i = 2; i < numero; i++) {
      sFibonacci.push(sFibonacci[i - 1] + sFibonacci[i - 2]);
    }
  
    // Aqui mostramos con un alert la secuencia producida en el navegador.
    alert("La Serie de Fibonacci es: " + sFibonacci.join(", "));
  }
  
  // Solcitamos al usuario un numero como entrada.
  const numero = parseInt(prompt("Introduzca un número: "));
  
  // Se realiza el llamado a la funcion que definimos al inicio para que realice el calculo con la entrada producida por el usuario.
  fibonacci(numero);