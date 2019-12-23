export const type = "NUEVA"





const NUEVA = id => {

	id= id+ 1
	// id = id + 1
	console.log(id) 
	return {

		type,

		payload: id,   


	}
	
}	


export default NUEVA


