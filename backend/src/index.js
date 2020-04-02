/**
 * Rotas / Recursos (/user é um tipo de recurso)
 */
/**
 * Métodos HTTP:
 * GET: Buscar uma informação no back-end
 * Post: Criar uma informação, como criar um usuario
 * PUT: Alterar uma informação no back
 * Delete: deletar uma informação
 */

/**Tipos de parâmetros:
 * Query params: parâmetro nomeados envidados na rota apos o símbolo de "?"
 *         geralmente para filtra(/users?nome=Diego)
 * Route params: Identificar um único recursos.
 * Request body: Corpo da requisição utilizados para criar ou alterar
 */
/**Bnaco de dados conexão:
 * Driver: query ex: Select * from users
 * Query builder: javascript ex: table('user').select('*')
 */


//importando os módulos da express pra variável.
const express = require('express');
const cors = require('cors');
//Importando a rota
const routes = require('./routes')
//criando a variavel que vai armazenar a aplicacao.
const app = express();

app.use(cors());
//Converter um jason como um objeto em  javaScript
app.use(express.json());
app.use(routes);

//porta que vai ouvir o app
app.listen(3333);