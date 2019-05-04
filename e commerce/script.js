const produtos = document.querySelector('.produtos')
listaProdutos.forEach((produto,indice)=>{
// for(let i=0;i<listaProdutos.length;i++){
let card = document.createElement("div")
card.className = 'card'
card.innerHTML =
`<h3>produto: ${produto.descricao.split(' ')[0]}</h3>
<p>descrição: ${produto.descricao}</p>
<p>valor: R$ ${produto.preço}</p>
<a href="#" id= '${indice}'>Adicionar ao carrinho</a>`
produtos.appendChild(card)
})

let botoes = document.querySelectorAll('a')
botoes.forEach((botao)=>{
    botao.addEventListener('click',function(){
        console.log (botao.id)
    
    })


})