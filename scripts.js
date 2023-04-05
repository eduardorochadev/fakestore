function buscarCategorias(){
    fetch("https://fakestoreapi.com/products/categories")
    .then(res => res.json())
    .then(dados => {
        dados.forEach(cada => {
            categorias.innerHTML += `   
                <li class="list-group-item">
                    <h6>
                        <input type="checkbox">
                        <span>${cada}</span>
                    </h6>
                </li>`
        })
    })
}buscarCategorias();


function buscarProdutos(){
    fetch("https://fakestoreapi.com/products?limit=15")
    .then(res => res.json())
    .then(dados => {
        dados.forEach(cada => {
            products.innerHTML += `
            <li>
                <div class="card">
                    <picture>
                        <img src="${cada.image}" alt="${cada.title}" class="card-img-top">
                    </picture>
                    <div class="card-body">
                        <h5 class="card-title">${cada.title}</h5>
                        <p class="card-text text-warp">${cada.description}</p>
                        <h6 class="card-text"> $${cada.price} <h6>
                        <a href="" class="btn btn-primary">Adicionar ao Carrinho</a>
                    </div>
                </div>
            </li>`
        })
    })
}buscarProdutos()