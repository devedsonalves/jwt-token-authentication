# API de Autenticação

Esta é uma API simples construída com Node.js, TypeScript, Express, Prisma, SQLite, JSON Web Token e Bcrypt. A API permite registrar e autenticar usuários usando nome, email e senha.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **TypeScript**: Superset do JavaScript que adiciona tipos estáticos.
- **Express**: Framework web para Node.js.
- **Prisma**: ORM (Object-Relational Mapping) para banco de dados.
- **SQLite**: Banco de dados leve e embutido.
- **JSON Web Token (JWT)**: Padrão para autenticação baseada em token.
- **Bcrypt**: Biblioteca para hashing de senhas.

## Funcionalidades

- **Registrar Usuário**: Cria uma nova conta de usuário.
- **Login de Usuário**: Autentica um usuário existente e retorna um token JWT.
- **Dados do Usuário**: Buscar os dados do usuário autenticado usando o token JWT.

## Instalação

Para instalar e executar este projeto localmente, siga as etapas abaixo:

1. Clone este repositório:
    ```sh
    git clone https://github.com/devedsonalves/jwt-token-authentication.git
    ```

2. Navegue até o diretório do projeto:
    ```sh
    cd jwt-token-authentication
    ```

3. Instale as dependências:
    ```sh
    npm install
    ```

4. Configure as variáveis de ambiente no arquivo `.env`:
    ```env
    DATABASE_URL="file:./database/data.db"
    JWT_PASS="sua_chave_secreta_aqui"
    ```

5. Execute as migrações do banco de dados:
    ```sh
    npx prisma migrate dev --name init
    ```

6. Inicie o servidor:
    ```sh
    npm run dev
    ```

## Endpoints

### Registrar Usuário

- **URL**: `/register`
- **Método**: `POST`
- **Corpo da Requisição**:
    ```json
    {
        "name": "Seu Nome",
        "email": "seu.email@example.com",
        "password": "sua_senha"
    }
    ```
- **Resposta**:
    ```json
    {
        "id": 1,
        "name": "Seu Nome",
        "email": "seu.email@example.com"
    }
    ```

### Login de Usuário

- **URL**: `/login`
- **Método**: `POST`
- **Corpo da Requisição**:
    ```json
    {
        "email": "seu.email@example.com",
        "password": "sua_senha"
    }
    ```
- **Resposta**:
    ```json
    {
        "token": "seu_token_jwt_aqui"
    }
    ```

### Dados do Usuário

- **URL**: `/me`
- **Método**: `GET`
- **Cabeçalho**:
    ```sh
    Authorization: Bearer seu_token_jwt_aqui
    ```
- **Resposta**:
    ```json
    {
        "id": 1,
        "name": "Seu Nome",
        "email": "seu.email@example.com"
    }
    ```

## Agradecimentos

Obrigado pela visualização e atenção! Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato.

- **Email**: [devedsonalves@gmail.com](mailto:devedsonalves@gmail.com)
- **LinkedIn**: [https://www.linkedin.com/in/edson4lves/](https://www.linkedin.com/in/edson4lves)