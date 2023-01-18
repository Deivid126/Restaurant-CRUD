const Estabelecimentos = require("../models/Estabelecimentos")
const Horarios = require("../models/Horarios")


const EstabelecimentosRespository = {

    async createHorario(dadosH) {


        const newH = await Horarios.create({
            domingo: dadosH.domingo,
            segunda: dadosH.segunda,
            terca:dadosH.terca,
            quarta:dadosH.quarta,
            quinta:dadosH.quinta,
            sexta: dadosH.sexta,
            sabado: dadosH.sabado
    });

    return newH;
    },

    async createEstabelecimento(dadosE,id){

        const newE = await Estabelecimentos.create({
            nome: dadosE.nome,
            documento: dadosE.documento,
            tipo: dadosE.tipo,
            CEP: dadosE.CEP,
            horarioId: id
        })
        return newE;
    },

    async getAll(){
        const EsteAll = await Estabelecimentos.findAll();

        return EsteAll;
    },

    async getOne(id){
        const EsteOne = await Estabelecimentos.findByPk(id);

        return EsteOne;
    },

    async deleteEste(id){
        const Este = this.getOne(id);
        Este.destroy();
    },

    async uptadeEste(id,dadosEst){
        const uptadeEstabe = await Estabelecimentos.findByPk(id);

        

        uptadeEstabe.nome = dadosEst.nome;
        uptadeEstabe.documento = dadosEst.documento;
        uptadeEstabe.tipo = dadosEst.tipo;
        uptadeEstabe.CEP = dadosEst.CEP;
 

        await uptadeEstabe.save();

        return uptadeEstabe;
    },

    async uptadeHor(id,dadosHor){
        const uptadehorarios = await Horarios.findByPk(id);
           
           uptadehorarios.domingo = dadosHor.domingo;
           uptadehorarios.segunda = dadosHor.segunda;
           uptadehorarios.terca = dadosHor.terca;
           uptadehorarios.quarta = dadosHor.quarta;
           uptadehorarios.quinta = dadosHor.quinta;
           uptadehorarios.sexta = dadosHor.sexta;
           uptadehorarios.sabado = dadosHor.sabado;
            
           await uptadehorarios.save();

           return uptadehorarios;
    }


}


module.exports = EstabelecimentosRespository;