import { collection, addDoc } from "firebase/firestore"; 
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCEokFyMeae9uuA3wfZpOmNNDIaRdaGJ7o",
    authDomain: "my-portfolio-e1a3b.firebaseapp.com",
    projectId: "my-portfolio-e1a3b",
    storageBucket: "my-portfolio-e1a3b.appspot.com",
    messagingSenderId: "14336504021",
    appId: "1:14336504021:web:b988da36fd19dcda23f25c"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

type Consulta = {
    name: string,
    email: string,
    message: string
}

const addConsulta = async ({name, email, message} : Consulta) => {
    try {
        const consultaData = {
            name,
            email,
            message
        };
        console.log("Sending data to Firestore:", consultaData);

        const docRef = await addDoc(collection(db, "consultas"), consultaData);
        console.log(docRef);
        
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
};

export { addConsulta }