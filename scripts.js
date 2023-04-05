let lista = [];

function buscarCategorias(){
    fetch("https://fakestoreapi.com/products/categories")
    .then(res => res.json())
    .then(listaCategorias => {
        listaCategorias.forEach(cada => {
            categorias.innerHTML += `   
                <li class="$>
                    <h6>
                        <input name="${cada}" type="checkbox" onClick="filtro()">
                        <span>${cada}</span>
                    </h6>
                </li>`
        })
    })
}buscarCategorias();


function buscarProdutos(){
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(listaProdutos => {
        listaProdutos.forEach(cada => {
            lista = listaProdutos
            products.innerHTML += `
            <li>
                <div class="card">
                    <picture>
                        <img src="${cada.image}" alt="${cada.title}" class="card-img-top">
                    </picture>
                    <div class="card-body">
                        <h5 class="card-title" title="${cada.title}">${cada.title}</h5>
                        <p class="card-text text-warp">${cada.description}</p>
                        <h6 class="card-text"> $${cada.price} <h6>
                        <a href="" class="btn btn-primary">Adicionar ao Carrinho</a>
                    </div>
                </div>
            </li>`
        })
    })
}buscarProdutos()


function filtro ()
{
    let inputs = document.querySelectorAll('input.checked');
    let inputs_nomes = [];
    for(let i = 0; i < inputs.length; i++){
        inputs_nomes.push(inputs[i].name)
    }

    let lis = documet.querySelectorAll("#products li");
    for(let i = 0; lis.length; i++){
        if(!lis[i].classList.contains(inputs_nomes.toString())){
            lis[i}.Style.display = none
        }
    }
}