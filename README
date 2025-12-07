
# **Lambda em Infra Local**

Utiliza-se docker e o próprio CLI da aws para execução de serviços junto com dynamodb (monitoração via terminal com o aws).

## Pré-requisitos

Node necessário para servidor interno:

https://nodejs.org/pt

Necessário ter o CLI AWS intalado em máquina junto com outra aplicação para não usar o cli "cru", usei o SAM.

AWS CLI:
https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

SAM:
https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html

Docker é necessário para operar em ambiente isolado:

https://www.docker.com/

## Dependências

Em um diretório qualquer onde vai ser a base do projeto instale dependencias:
```bash
npm install
```

Subir Local-Stack:
```bash
docker-composer up -d
```

Visualizar container:
```bash
docker ps
```

Schema da tabela do dynamodb:
```bash
aws dynamodb create-table \
    --endpoint-url http://localhost:4566 \
    --table-name DynamoTable \
    --attribute-definitions AttributeName=id,AttributeType=S \
    --key-schema AttributeName=id,KeyType=HASH \
    --billing-mode PAY_PER_REQUEST
```

Listar tabela:
```bash
aws dynamodb list-tables --endpoint-url http://localhost:4566
```

## Deploy

Inicializa SAM em local: 
```bash
sam local start-api --docker-network localstack
``` 
Gera os endpoints:
```bash
POST http://localhost:3000/createuser
GET  http://localhost:3000/getuser
``` 

Caso o deploy seja direto para o server da aws: 
```bash
sam deploy --guided
```

Qualquer mudança no **template.yaml** é necessário build:
```bash
sam build
```

Caso haja mudanças em rota é necessário recompilação dos arquivos **.TS**, 
```bash
npx tsc
```

*Leitura de arquivos **TS** não são feitas diretamente, mas com tradução para arquivos JavaScript por isso da compilação. Mudança de diretório das rotas também devem ser reconfiguradas no **yaml** já que existe "ponteiros" para os diretórios anteriores*

