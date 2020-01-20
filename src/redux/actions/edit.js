export const type = "EDIT"

const EDIT = id => {

	return {

		type,

		payload: id,   


	}
}


export default EDIT


