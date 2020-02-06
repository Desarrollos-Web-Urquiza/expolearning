import * as firebase from 'firebase'; 
import 'firebase/firestore';
import { firestore } from "./FirebaseConfig";



export function get() {




	 _getNormalData = () => {
      
	      return new Promise(function(resolve, reject) {

	        let notes = new Array()
	        let i = 0       
	              
	        firestore.collection("notes").where("note.id_user", "==", 1)
	        .get()
	        .then(function(querySnapshot) {
	          querySnapshot.forEach(function(doc) {
	          // doc.data() is never undefined for query doc snapshots
	          // console.log(doc.id, " => ", doc.data());

	            notes[i] = {
	              
	              id: doc.id,

	              note: doc.data().note.value,

	              title: doc.data().note.title

	            }

	            i++
	          });
	          
	          console.log("Consulta a BD  " + notes)
	          return resolve(notes) 
	      
	        })
	        .catch(function(error) {
	        
	          console.log("Error getting documents: ", error);
	        
	        });

	      });  

    	}



	_getNormalData()
	  .then(param => {
	    
	    let parametros = JSON.stringify(param)
	    //Mandamos los resultados de la BD a Redux
	    this.props.NUEVA(parametros)

	  })

}