var tnum = document.getElementById('tnum')
var stab = document.getElementById('stab')
var resp = document.getElementById('resposta')
var lista = []

function Numero(x) {
    if (Number(x) >= 1 || Number(x) <= 100){

        return true
    }
    else {
        return false
    }
}

function Lista(x,y){
    if (y.indexOf(Number(x)) != -1){
        return true
        
    }
     else{    
        return false
    }
    }




function adicionar(){
    
    if (Numero(tnum.value) && !Lista(tnum.value, lista)){ 
            lista.push(Number(tnum.value)) 
            let item = document.createElement('option')
            item.text = `Valor ${tnum.value} adicionado.`
            stab.appendChild(item)  
    }
    else {
        alert(`Valor inválido ou já encontrado na lista`)
    }
    tnum.value=''
    tnum.focus()
}      
        

function res(){
if (lista.length == 0){
    alert('Adicione valores para continuar.')
}
else {
var total = lista.length
var maior = lista[0]
var menor = lista[0]
var soma = 0
var media = 0

for (var pos in lista) {
    soma +=lista[pos]

    if (lista[pos] > maior){
    maior = lista[pos]
    }

    if (lista[pos]<menor){
    menor = lista[pos]
    }

}
media = soma/ lista.length
resp.innerHTML = ''
resp.innerHTML += `<p>Ao todo temos ${total} números cadastrados</p>` 
resp.innerHTML += `<p>O menor valor informado é <b>${menor}</b> e o maior é <b>${maior}</b></p>` 
resp.innerHTML += `<p>A soma dos valores cadastrados é <b>${soma}</b></p> ` 
resp.innerHTML += `<p>A média dos valores cadastrados é <b>${media}</b></p> ` 
}

}

