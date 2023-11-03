let valores =[8, 1, 7, 4, 2, 9]
valores.sort()


/* Quando utilizar um vetor, a variavél declarada antes de ( in ) vai percorrer todos o valores do vetor */
/*
valores.length = 6            Pos++
1º Pos = 0    valores[0] == 8 Pos = Pos+1
2º Pos = 1    valores[1] == 1 Pos = Pos+1
3º Pos = 2    valores[2] == 2 Pos = Pos+1
E assim sussecivamente */

//console.log(valores)
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

for(var pos=0;  pos < valores.length; pos++) { 
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
