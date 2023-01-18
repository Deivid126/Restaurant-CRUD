const Horarios = require("../models/Horarios");


const FuncionamentoService = {

async openorclose(diasemana,arr){


    
    if(diasemana != null){

                
        const diaOK = diasemana.split(" ");
        console.log(diaOK);
        const horainicio = diaOK[0].split(':');
        const horaend = diaOK[1].split(':');
        console.log(horaend);
        const horarioanalisado = arr[1].split(':');
        console.log(Number(horarioanalisado[0]));
        console.log(Number(horaend[0]));
        console.log(horainicio[0]);

        if((Number(horarioanalisado[0]) >= Number(horainicio[0]) && Number(horarioanalisado[0]) <= Number(horaend[0]))){
            if(Number(horarioanalisado[1] <= Number(horaend[1]))){
                return true;
            }else return false;
         }else return false;

        }

    if(diasemana == null) return false;


}

}

module.exports = FuncionamentoService;