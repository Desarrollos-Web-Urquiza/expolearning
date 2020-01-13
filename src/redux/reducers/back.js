
 import {type as BACK } from '../actions/back'
 // import { estado } from '../store'

console.log(BACK)
// console.log(estado)

function back( state="No hay notas eliminadas" , { type, payload } ) {

	// var action = { type: "NUEVAs" } 
	
	switch(type){

		case BACK:
			
			return state = payload; 
		
 
		default: 
			
			return state; 

	}
}


export default back  