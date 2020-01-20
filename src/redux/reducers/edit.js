
 import {type as EDIT } from '../actions/edit'
 // import { estado } from '../store'

console.log(EDIT)
// console.log(estado)

function edit( state="No se editan notas" , { type, payload } ) {

	// var action = { type: "NUEVAs" } 
	
	switch(type){

		case EDIT:
			
			return state = payload; 
		
 
		default: 
			
			return state; 

	}
}


export default edit  