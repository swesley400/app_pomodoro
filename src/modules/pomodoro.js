let segundos = document.getElementById("segundos")
let minutos = document.getElementById("minutos")

let segundosDescanso = document.getElementById("segundosDescanso")
let minutosDescanso = document.getElementById("minutosDescanso")

let segundosContagem = 60 //inicia contador
let minutosContagem = 25
let minutosCotagemDescanso = 5
let segundoscontagemDescanso = 60

let paraPrimeiroIntervalo
let paraDescanso





function chamaEstudo(){
    paraPrimeiroIntervalo = setInterval(estudo, 10);
}
function chamaDescanso(){
    paraDescanso = setInterval(descanso, 10);
}



function descanso (){
      
        

        segundosDescanso.innerHTML = segundoscontagemDescanso 
        minutosDescanso.innerHTML = minutosCotagemDescanso
   

        if(segundoscontagemDescanso >= 0){
            segundoscontagemDescanso = segundoscontagemDescanso -1
            segundosDescanso.innerHTML = segundoscontagemDescanso
        }
        if( segundoscontagemDescanso <= 0){
            segundoscontagemDescanso = 60 
            minutosCotagemDescanso = minutosCotagemDescanso - 1
             
        }
        if( segundoscontagemDescanso  <= 1 && minutosCotagemDescanso <= 0){
            segundoscontagemDescanso = 0
            segundosDescanso.innerHTML = segundoscontagemDescanso
            paraFuncaoDescanso()
            segundoscontagemDescanso = 60
            minutosCotagemDescanso = 5
          
        }
        
   
}


function estudo(){

    minutos.innerHTML = minutosContagem
    segundos.innerHTML = segundosContagem

    if(segundosContagem >= 0){
        segundosContagem = segundosContagem -1
        segundos.innerHTML = segundosContagem
    }

    if( segundosContagem <= 0){
        segundosContagem = 60 
        minutosContagem = minutosContagem - 1  
    }

    if( segundosContagem <= 1 && minutosContagem <= 0){
        segundosContagem = 0
        segundos.innerHTML = segundosContagem
        paraFuncaoEstudo()           
    }
    if(segundosContagem <= 0 && minutosContagem <=0){
        chamaDescanso()
        minutosContagem = 25
        segundosContagem = 60
    }
    
    
    
 
    
}
function paraFuncaoEstudo(){
    clearInterval(paraPrimeiroIntervalo)
    console.log("Chegou a hora do descanso")
}
function paraFuncaoDescanso(){
    clearInterval(paraDescanso)
    console.log("Chegou a hora de estudar")
}