
// solução 1
function verificaPalindromo(string){
    if (!string) return;

    // o comando split vai separar todas as letras da palavra e transformar em um array // o comando reverse vai reverter todas as letras de traz para frente //
    // o comando .join vai juntar todas as letras do array novamente e transformar em uma string
    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("ama"));

