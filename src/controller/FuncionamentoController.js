const Horarios = require("../models/Horarios");
const FuncionamentoService = require('../service/FuncionamentoService');


const FuncionamentoController = {
    
    async openorclose(req,res) {

        const dado = req.body;
        const id = req.params.id;

        const data = new Date(dado.date);
       
        const arr = dado.date.split(' ');

        const horarios = await Horarios.findByPk(id);

        
        if(data.getDay() == 0){


            const diasemana = horarios.domingo;
            const value = await FuncionamentoService.openorclose(diasemana,arr);
             
            res.json(value);

       }

        if(data.getDay() == 1){


            const diasemana = horarios.segunda;
            const value = await FuncionamentoService.openorclose(diasemana,arr);
            console.log(value);
            res.json(value);
            
       }

       
       if(data.getDay() == 2){

        const diasemana = horarios.terca;
        const value = await FuncionamentoService.openorclose(diasemana,arr);
         
        res.json(value);
   }

   
   if(data.getDay() == 3){

            const diasemana = horarios.quarta;
            const value = await FuncionamentoService.openorclose(diasemana,arr);
             
            res.json(value);    
    
}


if(data.getDay() == 4){



    const diasemana = horarios.quinta;
    const value = await FuncionamentoService.openorclose(diasemana,arr);
     
    res.json(value);

    
}


if(data.getDay() == 5){



    const diasemana = horarios.sexta;
    const value = await FuncionamentoService.openorclose(diasemana,arr);
     
    res.json(value);
    
}


if(data.getDay() == 6){


    const diasemana = horarios.sabado;
    const value = await FuncionamentoService.openorclose(diasemana,arr);
     
    res.json(value);
    
}

    }
}

module.exports = FuncionamentoController;