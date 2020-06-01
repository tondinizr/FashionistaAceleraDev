# Fashionista E-commerce

[![Netlify Status](https://api.netlify.com/api/v1/badges/15ae877e-07b2-4712-beff-060436950a79/deploy-status)](https://app.netlify.com/sites/welintonribeiro-react-fashionista/deploys)

### Cenário

Segundo o levantamento, da Webshoppers (Ebit / Nielsen), os e-commerces brasileiros faturaram cerca de R\$ 53,2 bilhões em 2018. O segmento “Moda e Acessórios” representa 5,6% do faturamento no varejo online, ocupando a segunda posição entre as categorias de produtos com mais pedidos, perdendo apenas para o segmento de eletroeletrônicos.

Oferecer a melhor experiência aos usuários que interagem com os produtos no desktop, e principalmente em dispositivos móveis, é fundamental para se manter vivo e competitivo nesse segmento.

### Objetivo

Como um profissional front-end, você será responsável por desenvolver as principais funcionalidades de um e-commerce de moda feminina, o Fashionista, garantindo a melhor experiência possível para os usuários interagirem com os produtos.

### Regras

    - Deve implementar as funcionalidades apresentadas nos wireframes / layouts.
    - Deve ser mobile first, possuindo uma experiência satisfatória tanto em mobile quanto em desktop.
    - Deve consumir a API do catálogo de produtos.
    - O estado global da aplicação deverá ser gerenciado com Redux
    - Deve ser um SPA (Single Page Application).
    - Todos os produtos da API devem ser exibidos.
    - Utilize BEM CSS para escrever os estilos.
    - Deve-se fazer deploy do projeto, servindo-o no Netlify.
    - Não utilize frameworks CSS como Bootstrap, Foundation e afins.

## Requisitos obrigatórios

    - Para cada item do catálogo de produtos as seguintes informações devem estar na página:
        -Imagem
        -Nome
        -Preço
        -Status “Em promoção”
        -Preço promocional (se disponível)
        -Tamanhos disponíveis
        -Selo “Promoção”
    - Deve ser possível adicionar itens por tamanho no carrinho de compras.
    - Deve ser possível visualizar os itens adicionados no carrinho de compras, exibindo imagem, nome, preço e quantidade.
    - Deve ser possível remover itens do carrinho de compras.

## Requisitos opcionais

    -O carrinho de compras deve persistir entre reloads de página.
    -Alguns produtos não tem todos os tamanhos disponíveis, mostre apenas os tamanhos disponíveis em estoque.
    -Implemente a funcionalidade de busca em tempo real.

## Endpoint - Catálogo de Produtos

    https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog

## Propriedades de um produto (referência):

    {
        "name": "Nome do produto",
            "style": "Código de categoria",
            "code_color": "Código de categoria + código de cor",
            "color_slug": "slug da cor do produto",
            "color": "Nome da cor do produto",
            "on_sale": "booleano - Se o produto está em promoção",
            "regular_price": "preço sem promoção",
            "actual_price": "preço com promoção",
            "discount_percentage": "% de desconto da promoção",
            "installments": "quantidade de parcelas",
            "sizes": [
                {
                    "available": "booleano - indica se o tamanho está disponível",
                    "size": "nome do tamanho",
                    "sku": "código do produto + código do tamanho (para adicionar no carrinho)"
                }
            ]
    }

### Deploy

A recomendação é para que o deploy seja feito no netilify (gratuito) ou serviço similar - https://www.netlify.com/

### Layouts

Os layouts abaixo servem de referência visual das funcionalidades, sintam-se livres para segui-las ou implementá-las com base em outras referências, desde que atenda às regras e aos requisitos obrigatórios.

### Layouts: Referência Navegável

    https://viniciusvinna.netlify.app/react-fashionista

### Layouts: Home (catálogo)

![](https://codenation-challenges.s3-us-west-1.amazonaws.com/ecommerce/1.png)

### Layouts: Página do produto

![](https://codenation-challenges.s3-us-west-1.amazonaws.com/ecommerce/2.png)

### Layouts: Indicador de produtos no ícone do carrinho

![](https://codenation-challenges.s3-us-west-1.amazonaws.com/ecommerce/3.png)

### Layouts: Carrinho de compras aberto

![](https://codenation-challenges.s3-us-west-1.amazonaws.com/ecommerce/4.png)

### Layouts: Busca em tempo real

![](https://codenation-challenges.s3-us-west-1.amazonaws.com/ecommerce/5.png)
#   F a s h i o n i s t a A c e l e r a D e v 
 
 #   F a s h i o n i s t a A c e l e r a D e v 
 
 
