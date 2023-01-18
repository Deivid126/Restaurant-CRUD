const Estabelecimentos = require('../models/Estabelecimentos');
const Horarios = require('../models/Horarios');
const db = require('../database');
const EstabelecimentosController = {

    async create(req,res){

        const dadosHor = req.body.horarios;
        const dadosEst = req.body.estabelecimentos;

        const newhorarios = await Horarios.create({
            domingo: dadosHor.domingo,
            segunda: dadosHor.segunda,
            terca:dadosHor.terca,
            quarta:dadosHor.quarta,
            quinta:dadosHor.quinta,
            sexta: dadosHor.sexta,
            sabado: dadosHor.sabado
    });

        const horarioId = newhorarios.id;

        const newEstabe = await Estabelecimentos.create({
            nome: dadosEst.nome,
            documento: dadosEst.documento,
            tipo: dadosEst.tipo,
            CEP: dadosEst.CEP,
            horarioId: horarioId
});

        if(!newEstabe) { res.sendStatus(400)};

        return res.status(201).json(newEstabe);

    },

    async findAll(req,res) {
        const EstabelecimentosAll = await Estabelecimentos.findAll();

        if(!EstabelecimentosAll) res.sendStatus(400);

        return res.status(200).json(EstabelecimentosAll);
    },

    async delete(req,res){
        const id = req.params.id;

        const Estabe = await Estabelecimentos.findByPk(id);

        Estabe.destroy();
        

        res.sendStatus(204);
    },

    async Atualizar(req,res){
        const dadosHor = req.body.horarios;
        const dadosEst = req.body.estabelecimentos;
        const id = req.params.id;

        if(dadosHor){
            const uptadehorarios = await Horarios.findByPk(id);
            console.log(id);
           uptadehorarios.domingo = dadosHor.domingo;
           uptadehorarios.segunda = dadosHor.segunda;
           uptadehorarios.terca = dadosHor.terca;
           uptadehorarios.quarta = dadosHor.quarta;
           uptadehorarios.quinta = dadosHor.quinta;
           uptadehorarios.sexta = dadosHor.sexta;
           uptadehorarios.sabado = dadosHor.sabado;
            
           await uptadehorarios.save();

        }
     
        const uptadeEstabe = await Estabelecimentos.findByPk(id);

        console.log(uptadeEstabe.horarioId);

        uptadeEstabe.nome = dadosEst.nome;
        uptadeEstabe.documento = dadosEst.documento;
        uptadeEstabe.tipo = dadosEst.tipo;
        uptadeEstabe.CEP = dadosEst.CEP;
 

        await uptadeEstabe.save();

    res.status(200).json(uptadeEstabe);
    }

}


module.exports = EstabelecimentosController;