const { getAll } = require("../repository/EstabelecimentoRepository");
const EstabelecimentosRespository = require("../repository/EstabelecimentoRepository")


const EstabelecimentosService = {


async createEstabeandHor(dadosE,dadosH){

        
        const dadosHnew =  await EstabelecimentosRespository.createHorario(dadosH);
        const id = dadosHnew.id;
        const dadosEstnew = await EstabelecimentosRespository.createEstabelecimento(dadosE,id);

        return dadosEstnew;
},

async getAll(){
    const Alldados = await EstabelecimentosRespository.getAll();
    return Alldados;
},

async deleteEstabelecimentos(id){
    await EstabelecimentosRespository.deleteEste(id);
},
async uptadeEstabeandHorarios(dadosE,dadosH,id){
    
    const uptdadeH = await EstabelecimentosRespository.uptadeHor(id,dadosH);
    const uptadadeE = await EstabelecimentosRespository.uptadeEste(id,dadosE);

    return uptadadeE;
}

}

module.exports = EstabelecimentosService;