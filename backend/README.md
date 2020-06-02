# projectongs
Esse é um projeto construido dentro da semana OmniStack 11 - A criação de uma aplicação em react e react native para juntar ONGs a pessoas interessadas em ajudar.

# use project

```
npm install
```

```
npm init -y
```

framework basico 

```
npm install express
```

npx : como o npm porem ele instala algo externo sem realmente colocar na nossa maquina

```
npx create-react-app name_project
```

Para resetar o servidor sempre que tiver alteracoes
```
npm install nodemon -D
```
Colocamos com o -D para ele salvar como uma dependencia de dev
Ou seja so precisamos dele no dev

Para instalar o Query Builder que vamo usar o KNEX.js
```
npm install knex

```
Depois é necessário instalar o banco que iremos utilizar nesse caso o sqlite3
```
npm install sqlite3
```

Para iniciar a configuração do banco passamos o comando:
```
npx knex init
```

instalar o modo de seguranca CORS 
determinando quem pode acessar nossa aplicacao
```
npm install cors
```

Biblioteca para fazer validações
[https://github.com/arb/celebrate](https://github.com/arb/celebrate)
```
npm install celebrate
```

framework de teste utilizado na aplicacao
```
npm install jest
```

Para começar o jest
```
npx jest --init
```
Configurando ambiente para teste
Para saber qual ambiente estamos:
```
npm install cross-env
```

Gerenciando varáveis ambiente no NODEJS
[https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/](https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/)

Recuperando a variavel global
```
const config = process.env.NODE_ENV
```

Recuperando a variavel de teste no banco de dados
```
const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;
```

Biblioteca para fazermos as chamadas na api porém atráves dos testes de integração.

Supertest

Vai fazer requisições http e vai trazer algumas validações a mais no retorno da api.

[https://github.com/visionmedia/supertest](https://github.com/visionmedia/supertest)

```
npm install supertest
```