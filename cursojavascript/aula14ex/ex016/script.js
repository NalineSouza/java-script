function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let resultado = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados!')
    } else {
        resultado.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value) //transforma o valor que esta dentro da caixa do input com id inicio, em numero.
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerado PASSO 1')
            p = 1
        }
        /* A variavel c vai começar no início(i), e enquanto a variavel c for menor(<) ou igual(=) a variavel (f) a variavel (c) vai receber ela mesmo mais a variavel (p)
        for (let c = i; c <= f; c += p)
        */
       if (i < f) {
       /* A variavel c vai começar no início(i), e enquanto a variavel c for menor(<) ou igual(=) a variavel (f) a variavel (c) vai receber ela mesmo mais a variavel (p)
        for (let c = i; c <= f; c += p)
        */
       
       // Contagem crescente
       for(let c = 1; c <= f; c += p) {
        resultado.innerHTML += `${c} \u{1F601} `
          }
       } else {
        
        /*Enquanto c for maior ou igual a f, o meu contador vai perder o passo*/

        // Contagem decrescente
        for(let c = i; c >= f; c-= p){
            resultado.innerHTML += `${c} \u{1F601}`
        }

       }
       resultado.innerHTML += `\u{1F3C1}`

    }     
}