import { createStore, combineReducers   }  from 'redux'
import reducidor  from './reducers/reducidor.js'
import back  from './reducers/back.js'
import edit  from './reducers/edit.js'
import id_user  from './reducers/id_user.js'

const reducer = combineReducers ({

	reducidor,
	back,
	edit,
	id_user

})

const store = createStore( reducer)

export default store  