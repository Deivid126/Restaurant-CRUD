const Estabelecimentos = require('../models/Estabelecimentos');
const Horarios = require('../models/Horarios');
const db = require('../database');
const EstabelecimentosService = require('../service/EstabelecimentosServices');
const EstabelecimentosController = {

    async create(req,res){

        const dadosHor = req.body.horarios;
        const dadosEst = req.body.estabelecimentos;

        const newEstabe = await EstabelecimentosService.createEstabeandHor(dadosEst,dadosHor);

        if(!newEstabe) { res.sendStatus(400)};

        return res.status(201).json(newEstabe);

    },

    async findAll(req,res) {
        const EstabelecimentosAll = await EstabelecimentosService.getAll();

        if(!EstabelecimentosAll) res.sendStatus(400);

        return res.status(200).json(EstabelecimentosAll);
    },

    async delete(req,res){
        const id = req.params.id;

        await EstabelecimentosService.deleteEstabelecimentos(id);
        
        res.sendStatus(204);
    },

    async Atualizar(req,res){
        const dadosHor = req.body.horarios;
        const dadosEst = req.body.estabelecimentos;
        const id = req.params.id;

        
    const uptadadeEstabe = await EstabelecimentosService.uptadeEstabeandHorarios(dadosEst,dadosHor,id);

    res.status(200).json(uptadadeEstabe);
    }

}


module.exports = EstabelecimentosController;