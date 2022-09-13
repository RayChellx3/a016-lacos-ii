// Vamos criar um código que cria e recebe um array com os últimos 4 resultados da Mega-sena. Portanto, precisaremos de um array de arrays.
// Depois, devemos verificar se o número de itens do array que contém os jogos contém exatamente 4 resultados
// Caso seja diferente, imprima que é necessário alterar o número de itens do array.

// console.log(resultadosMegaSena.length)

//para percorrer o array
// // inicial;   limite;                        a cada interação / incremento
// for (let i = 0; i < resultadosMegaSena.length; i++) {
//     if(resultadosMegaSena[i].length !== 6){
//       alert("resultado do sorteio está errado.")
//     } else {
//       console.log(`Confira os resultados da mega! ${resultadosMegaSena[i]}`)
//     }
//   }

  const resultadosMegaSena = [
    [6, 10, 23, 89, 12, 34],//0
    [81, 12, 32, 65, 86, 4],//1
    [10, 54, 8, 12, 58, 23],//2
    [9, 3, 6, 10, 40, 50] //3
  ]
  for (let i= 0; i< resultadosMegaSena.length; i++){
    console.log(`Sorteio ${i+1}:`)
    for(let indice = 0; indice < resultadosMegaSena[i].length; indice++){
      const sorteio = resultadosMegaSena[i] // variavel pra pegar cada sorteio
      // console.log(sorteio[indice])
      console.log(resultadosMegaSena[i][indice])
    }
  }
  
  // Altere o laço externo do programa anterior para que ele seja um for… in
  // Altere o laço interno do programa anterior para que ele seja um for… of







