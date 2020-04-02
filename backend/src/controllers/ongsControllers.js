//importando conexao com banco de dados
const connection = require('../database/connection.js');
const crypto = require('crypto');

module.exports = {

    //Listagem de ongs
    async index (request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json({ ongs })
    },
    /** e (request, response) é uma função
     * Função assincrona pra que a resposta seja somente depois de inserir os dados 
     * salvar informacoes
     */
    async create (request, response) {
        const { name, email, whatsapp, city, uf } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        //conecta indico a tabela "." o método e os campos
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

    return response.json({ id })
    },
    

}