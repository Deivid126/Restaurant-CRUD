const Horarios = require("../models/Horarios");


const FuncionamentoController = {
    
    async openorclose(req,res) {

        const dado = req.body;
        const id = req.params.id;

        const data = new Date(dado.date);
       
        const arr = dado.date.split(' ');

        const horarios = await Horarios.findByPk(id);

        
        if(data.getDay() == 0){



            if(horarios.domingo != null){

                
            const segunda = horarios.domingo.split(" ");
            const horainicio = segunda[0].split(':');
            const horaend = domingo[1].split(':');
            const horarioanalisado = arr[1].split(':');
            if((Number(horarioanalisado[0]) >= Number(horainicio[0]) || Number(horarioanalisado[0]) <= Number(horaend[0]))){
                if(Number(horarioanalisado[1]) > Number(horaend[1])){
                 res.json(false);
                }
                 else res.json(true);
             }

            }

            if(horarios.domingo == null) res.json(false);
            
       }

        if(data.getDay() == 1){



            if(horarios.segunda != null){

                
            const segunda = horarios.segunda.split(" ");
            const horainicio = segunda[0].split(':');
            const horaend = segunda[1].split(':');
            const horarioanalisado = arr[1].split(':');
            if((Number(horarioanalisado[0]) >= Number(horainicio[0]) || Number(horarioanalisado[0]) <= Number(horaend[0]))){
                if(Number(horarioanalisado[1]) > Number(horaend[1])){
                 res.json(false);
                }
                 else res.json(true);
             }

            }

            if(horarios.segunda == null) res.json(false);
            
       }

       
       if(data.getDay() == 2){



        if(horarios.terca != null){

            
        const terca = horarios.terca.split(" ");
        const horainicio = terca[0].split(':');
        const horaend = terca[1].split(':');
        const horarioanalisado = arr[1].split(':');
        if((Number(horarioanalisado[0]) >= Number(horainicio[0]) || Number(horarioanalisado[0]) <= Number(horaend[0]))){
            if(Number(horarioanalisado[1]) > Number(horaend[1])){
             res.json(false);
            }
             else res.json(true);
         }

        }

        if(horarios.terca == null) res.json(false);
        
   }

   
   if(data.getDay() == 3){



    if(horarios.quarta != null){

        
    const quarta = horarios.quarta.split(" ");
    const horainicio = quarta[0].split(':');
    const horaend = quarta[1].split(':');
    const horarioanalisado = arr[1].split(':');
    if((Number(horarioanalisado[0]) >= Number(horainicio[0]) || Number(horarioanalisado[0]) <= Number(horaend[0]))){
        if(Number(horarioanalisado[1]) > Number(horaend[1])){
         res.json(false);
        }
         else res.json(true);
     }

    }

    if(horarios.quarta == null) res.json(false);
    
}


if(data.getDay() == 4){



    if(horarios.quinta != null){

        
    const quinta = horarios.quinta.split(" ");
    const horainicio = quinta[0].split(':');
    const horaend = quinta[1].split(':');
    const horarioanalisado = arr[1].split(':');
    if((Number(horarioanalisado[0]) >= Number(horainicio[0]) || Number(horarioanalisado[0]) <= Number(horaend[0]))){
        if(Number(horarioanalisado[1]) > Number(horaend[1])){
         res.json(false);
        }
         else res.json(true);
     }

    }

    if(horarios.quinta == null) res.json(false);
    
}


if(data.getDay() == 5){



    if(horarios.sexta != null){

        
    const sexta = horarios.sexta.split(" ");
    const horainicio = sexta[0].split(':');
    const horaend = sexta[1].split(':');
    const horarioanalisado = arr[1].split(':');
    if((Number(horarioanalisado[0]) >= Number(horainicio[0]) || Number(horarioanalisado[0]) <= Number(horaend[0]))){
        if(Number(horarioanalisado[1]) > Number(horaend[1])){
         res.json(false);
        }
         else res.json(true);
     }

    }

    if(horarios.sexta == null) res.json(false);
    
}


if(data.getDay() == 6){



    if(horarios.sabado != null){

        
    const sabado = horarios.sabado.split(" ");
    const horainicio = sabado[0].split(':');
    const horaend = sabado[1].split(':');
    const horarioanalisado = arr[1].split(':');
    if((Number(horarioanalisado[0]) >= Number(horainicio[0]) || Number(horarioanalisado[0]) <= Number(horaend[0]))){
        if(Number(horarioanalisado[1]) > Number(horaend[1])){
         res.json(false);
        }
         else res.json(true);
     }

    }

    if(horarios.sabado == null) res.json(false);
    
}

    }
}

module.exports = FuncionamentoController;