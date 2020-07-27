// function soma(n1, n2) {
//     return n1 + n2
// }


// Fatorial
// O nome da var vai ser usada pra chamar a função no final
var fatorial = function fat(n){ // Aqui ele var verificar se o valor que está em n é menor que 2
    // Se o valor que está em n for menor que 2, ele retorna 1 
    if (n < 2) {
        return 1
    }else{
        // Se o valor que está em n for maior 2, ele retorna...
        return n * fat(n - 1)
    }
}
// Para chamar a função, temos que colocar o nome da variável ao invéz do nome da função
console.log(fatorial(5))