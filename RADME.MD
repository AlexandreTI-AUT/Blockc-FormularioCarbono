# Formulário de Registro de Pegada de Carbono

## Introdução
Este projeto tem como objetivo registrar a pegada de carbono de empresas e organizações, permitindo o preenchimento de um formulário com informações sobre emissões de carbono. Além disso, o projeto conta com testes automatizados utilizando Cypress para garantir a correta funcionalidade do formulário.

## Como Clonar o Repositório
Para obter uma cópia local do projeto, execute o seguinte comando:

```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

## Instalação
Antes de rodar o projeto, certifique-se de ter o Node.js instalado. Em seguida, instale as dependências:

```sh
npm install
# ou
yarn install
```

## Como Executar
Para iniciar a aplicação, utilize:

```sh
npm start
# ou
yarn start
```

Isso iniciará a aplicação e permitirá acessar o formulário no navegador.

## Testes Automatizados
O projeto conta com testes automatizados utilizando Cypress para validar o comportamento do formulário.

### Como Rodar os Testes
Para abrir a interface gráfica do Cypress e rodar os testes manualmente, utilize:

```sh
npx cypress open
```

Caso queira rodar os testes em modo headless (sem abrir a interface), utilize:

```sh
npx cypress run
```

### Cobertura dos Testes
Os testes automatizados verificam os seguintes cenários:

1. **Preenchimento bem-sucedido do formulário**: Preenche os campos necessários e confirma o envio.
2. **Validação do campo Empresa**: O sistema deve exibir uma mensagem de erro se o campo estiver vazio.
3. **Validação do campo Tipo de Emissão**: O usuário deve selecionar um tipo de emissão para prosseguir.
4. **Validação do campo Quantidade Estimada**: O sistema deve solicitar a inserção da quantidade estimada de emissão.


