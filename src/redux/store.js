import { createStore, combineReducers   }  from 'redux'

import reducidor  from './reducers/reducidor.js'
import back  from './reducers/back.js'
import edit  from './reducers/edit.js'









const reducer = combineReducers ({


	reducidor,
	back,
	edit



})

const store = createStore( reducer)

 
  

export default store  