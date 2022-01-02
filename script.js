function calcular(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    

    if (inicio.value.length == "" || fim.value.length == 0 || passo.value.length == 0 ) {
        window.alert ('[ERRO] Falta dados')
    } else {
        res.innerHTML = 'Contando..'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo inválido, Considerado passo 1')
            p = 1
        }
        if (i < f){
            //contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
           }             
       } else {
           //contagem decrescente
           for (let c = i; c >= f; c -= p) {
               res.innerHTML += `${c} \u{1F449}`
           }       
       }
       res.innerHTML += `\u{1F3C1}`     
    } 
}