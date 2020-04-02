//importando conexao com banco de dados
const connection = require('../database/connection.js');
module.exports = {
    //Listagem de incidents
    async index(request, response) {
        const { page = 1} = request.query;
        //Total de incidentes
        const [count] = await connection('incidents').count();
        console.log(count);

        //total de incidents pelo header
        response.header('X-Total-Count', count['count(*)']);
        //esquema de paginação, onde exibira so 5 incidentes por vez
        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=' , 'incidents.ong_id')
        .limit(5)
        .offset((page - 1)* 5)
        .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);
      
        return response.json({  incidents })
    },

    async create(request, response){
        const { title, description, value} = request.body;
        const ong_id = request.headers.authorization;
       

        const [id] = await connection('incidents').insert({
            ong_id,
            title,
            description,
            value
        })
        return response.json({ ong_id, id })
    },

    async delete(request, response){
        // ex: /incidents/1(params)
        const { id } = request.params;
        //para verificar se o delete é da ong logada
        const ong_id = request.headers.authorization;
        //selecionar o incidente com id x da ong logada
        console.log(ong_id)
    
        const incident = await connection('incidents').select('ong_id')
            .where('id', id).first();
        console.log(incident.ong_id)
        if (incident.ong_id != ong_id){
            //resposta caso voce não tenha autorização de deletar codigo 401
            return response.status(401).json({error: 'Operation not permitted.'});
        }
        //caso passado pelo if, deletar o incidente selecionado
        await connection('incidents').where('id', id).delete()
        //resposta caso operaçãobem sucedida.
        return response.status(204).send();

    }



}