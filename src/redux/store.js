import { createStore, combineReducers   }  from 'redux'

import reducidor  from './reducers/reducidor.js'
import back  from './reducers/back.js'









const reducer = combineReducers ({


	reducidor,
	back


})

const store = createStore( reducer)

 
  

export default store  