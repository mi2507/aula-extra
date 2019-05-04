// criei uma lista de produtos vazia 
let listaProdutos = [];  

// criei oobjeto camiseta, acoplamento de propriedades e o objeto
let camiseta =  {
tamanho: 'unico',
cor:'preta',
modelo:'babylook',
descricao:'camiseta reprograma estilo diva function 👕',
preço: 35,
descrevaMe: function(){alert(`${this.descricao} - preço R$ ${this.preço} - cor R$ ${this.cor}`)},   
// descrevaMe2(){alert(this.descricao + '- preço R$' + this.preço.toFixed(2))}
// this.descricao objeto.descricao 
}
// console.log(camiseta.descricao)


// outro objeto
let caneca = {
tamanho: 'unico',
modelo:'canecadecha',
descricao:'caneca reprograma reprograma estilo diva function ☕',
preço: 25,
// this.descricao objeto.descricao 
}

// console.log(caneca.modelo)

let adesivo = {
    cor:'branco',
    descricao:'adesivo reprograma',
    preço: 10,
    // this.descricao objeto.descricao 
    }
   
    listaProdutos.push(camiseta,caneca,adesivo);


