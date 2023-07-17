# Como Criar uma Moeda Lastreada em Ouro

Este tutorial irá guiá-lo através dos passos para criar uma moeda lastreada em ouro usando Ethereum e a API do Metal Price.

## Pré-requisitos

- Node.js e npm instalados.
- Uma conta no [Metal Price API](https://www.metalpriceapi.com/) para obter uma chave de API.
- [Ganache](https://www.trufflesuite.com/ganache) para uma blockchain Ethereum local.
- [MetaMask](https://metamask.io/) ou similar para interagir com a blockchain.

## Configurando o Projeto

1. Instale as dependências do projeto.

```shell
npm install
```

2. Crie um arquivo .env na raiz do projeto e preencha as variáveis de ambiente:

```shell
METAL_PRICE_API_KEY=sua-chave-api
JSON_RPC_PROVIDER_URL=url-do-seu-provider
PRIVATE_KEY=sua-chave-privada
CONTRACT_ADDRESS=endereço-do-seu-contrato
```

## Executando o Projeto

Para executar o projeto, use o seguinte comando:

```shell
npm run start
```

Isso irá iniciar o servidor express na porta 3000.

## Testando o Projeto
Para testar o projeto, você pode usar o seguinte comando:
```shell
npx hardhat test
```

Este comando irá executar os testes definidos no diretório test.

