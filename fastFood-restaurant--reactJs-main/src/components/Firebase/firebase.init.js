import { initializeApp } from "firebase/app";
import firebaseConfig from "./fireabse.confic";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);


}

export default initializeAuthentication;
