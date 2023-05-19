let valores =[8, 1, 4, 2, 9 ]
valores.push(3)
valores.sort()
//console.log(valores)
/*for(let pos =0; pos< valores.length; pos++) {
    console.log(`a posição  ${pos} tem o valor ${valores[pos]}`)
}*/


for(let pos in valores){
    console.log(`a posição ${pos} tem valor ${valores[pos]} `)
} 