
 import {type as NUEVA } from '../actions/nueva'

 // import { NUEVA as NUEVA } from '../actions/nueva'


console.log(NUEVA)
// console.log(payload)




function reducidor( state , { type, payload } ) {


	// console.log("PAYLOAD DEL REDUCIDOR!!!!" + payload)
	if(state == undefined){

		state ="Estado undefined"
		
	}

	

	switch(type){

		case NUEVA:
			

			return state = payload


		
 
		default: 
			
			return state 

	}
}


export default reducidor  