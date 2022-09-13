// # Exercício 2

// Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

// **Utilize o for...in para resolver**



const tabuada = Number(prompt("insira um número:"))
const array = [1,2,3,4,5,6,7,8,9,10]

//for (let i-0; i<10; i++){
//     console.log(`${tabuada} x ${i+i} - ${tabuada *i} `)
// }

for (let i in array){
    console.log(`${tabuada} x ${array[i]} = ${tabuada * array[i]}`)
}
