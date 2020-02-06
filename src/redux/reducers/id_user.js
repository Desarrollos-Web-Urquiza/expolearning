import {type as ID_USER } from '../actions/id_user'
 // import { estado } from '../store'

console.log(ID_USER)
// console.log(estado)

function id_user( state="No hay ID disponible" , { type, payload } ) {

	// var action = { type: "NUEVAs" } 
	
	switch(type){

		case ID_USER:
			
			return state = payload; 
		
 
		default: 
			
			return state; 

	}
}

export default id_user  