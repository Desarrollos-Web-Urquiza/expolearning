
 import {type as NUEVA } from '../actions/nueva'

 // import { NUEVA as NUEVA } from '../actions/nueva'


console.log(NUEVA)
// console.log(payload)




function reducidor( state , { type, payload } ) {


	console.log(payload)
	
	if(payload !== undefined){
		console.log("Redefinicion de localstorage")
		localStorage.setItem("GLOBAL_STATE", payload)
	}
	
	if(payload%2 === 0){

		type = "NUEVA"

	}
	else{


		type= " "
	}


	switch(type){

		case NUEVA:
			

			return state = {estado: "Hola mundo", num: 1};


		
 
		default: 
			
			return state  = {estado: "Mundo hola", num: 0}; 

	}
}


export default reducidor  