Recipe Viewer

Um projeto front-end que consome dados de receitas de uma API e exibe informações detalhadas sobre cada prato, incluindo ingredientes, calorias, tempo de preparo, instruções de preparo, tipo de culinária e classificação.

💻 Tecnologias utilizadas

HTML: Estrutura da página e containers.

CSS: Estilização dos botões, listas e imagens.

JavaScript (ES6+): Consumo da API, manipulação do DOM e interação com o usuário.

Fetch API: Para buscar dados da API externa https://dummyjson.com/recipes.

🔗 Funcionalidades

Listagem de receitas

Cada receita é exibida como um botão com o nome do prato.

Ao clicar em um botão, o prato selecionado é destacado e suas informações detalhadas são exibidas.

Informações do prato

Ingredientes listados em <ul>.

Quantidade de calorias.

Tempo de preparo.

Imagem do prato.

Modo de preparo

Instruções detalhadas da receita.

Botão para abrir/fechar o modo de preparo dinamicamente.

Informações extras

Tipo de culinária (cuisine).

Classificação (rating).

Número de porções (servings).

Tipo de refeição (mealType).

Imagem representando a culinária.

/project-root
│
├─ index.html           # Estrutura HTML do projeto
├─ style.css            # Estilização dos componentes
├─ script.js            # Lógica JS: consumo da API, DOM e interações
├─ /img                 # Imagens de culinárias
│   └─ [id].png         # Imagens correspondentes a cada tipo de culinária
└─ README.md            # Documentação do projeto

🚀 Como usar

Clone o repositório:

git clone https://github.com/seu-usuario/recipe-viewer.git

⚡ Observações

O projeto consome a API DummyJSON Recipes
, portanto é necessário conexão com a internet.

Para as imagens de culinária (/img/[id].png), adicione arquivos correspondentes aos IDs das culinárias presentes nas receitas.

O projeto é responsivo para visualização em desktops e tablets. Ajustes podem ser necessários para telas menores.
